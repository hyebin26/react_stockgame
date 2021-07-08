import { createSlice } from "@reduxjs/toolkit";
import swal from "sweetalert";
import { stock } from "../service/chart_data";
import { handlePercentAPI } from "../service/percent";
import { data } from "../service/doughnut";
import { makeHintAPI } from "../service/hint";

export const mainSlice = createSlice({
  name: "main",
  initialState: {
    user: "default",
    hasMoney: 0,
    day: 1,
    clickedStockPrice: 15000,
    clickedTotal: 0,
    clickedAmount: 0,
    chartStock: stock,
    sellClickedTotal: 0,
    sellClickedAmount: 0,
    clickedLebel: "B IT",
    haveStocks: [],
    stocks: [],
    isLoading: true,
    spendMoney: [],
    isDoughnutLoading: false,
    doughnutData: data,
    haveHints: [],
    hintPoint: 15,
  },
  reducers: {
    clickBuyPerBtn: (state, action) => {
      const percent = action.payload;
      state.clickedAmount = Math.floor(
        (state.hasMoney / state.clickedStockPrice) * (percent / 100)
      );
      state.clickedTotal = state.clickedAmount * state.clickedStockPrice;
    },
    changeAmount: (state, action) => {
      const clickedAmount = action.payload;
      state.clickedAmount = clickedAmount;
      state.clickedTotal = clickedAmount * state.clickedStockPrice;
    },
    clickBuyBtn: (state) => {
      const price = state.clickedStockPrice;
      const amount = parseInt(state.clickedAmount);
      const label = state.clickedLebel;
      const currentHasMoney = state.hasMoney;
      let checkHaveStocks = false;
      if (currentHasMoney >= amount * price) {
        state.hasMoney = currentHasMoney - price * amount;
        if (state.haveStocks.length !== 1) {
          checkHaveStocks = state.haveStocks.find(
            (item) => item.label === label
          );
        }
        if (!checkHaveStocks) {
          state.haveStocks.push({ label, price, amount });
          state.spendMoney.push({ label, price: price * amount });
        } else {
          state.haveStocks.map((item) => {
            if (item.label === label) {
              item.amount += amount;
            }
            return null;
          });
          state.spendMoney.map((item) => {
            if (item.label === label) {
              item.price += price * amount;
            }
            return null;
          });
        }
        swal({ title: "매수성공", icon: "success" });
        state.clickedAmount = 0;
        state.clickedTotal = 0;
      } //
      else {
        swal({ title: "돈이 부족해요!", icon: "warning" });
        state.clickedAmount = 0;
        state.clickedTotal = 0;
      }
    },
    clickLabel: (state, action) => {
      state.chartStock.datasets[0].label = action.payload;
      state.clickedLebel = action.payload;
      const price = [];
      state.stocks.map((item) => {
        if (item.label === action.payload) {
          price.push(...item.price.slice(0, state.day));
        }
        return null;
      });
      state.chartStock.datasets[0].data = price;
      state.clickedTotal = 0;
      state.clickedAmount = 0;
      state.sellClickedAmount = 0;
      state.sellClickedTotal = 0;
      state.clickedStockPrice = price[price.length - 1];
    },
    clickPerSellBtn: (state, action) => {
      const label = state.clickedLebel;
      const percent = action.payload;
      const hasStock = state.haveStocks;
      hasStock.map((item) => {
        if (item.label === label) {
          state.sellClickedAmount = Math.ceil(item.amount * (percent / 100));
          state.sellClickedTotal =
            state.sellClickedAmount * state.clickedStockPrice;
        }
        return null;
      });
    },
    changeSellAmount: (state, action) => {
      const amount = action.payload;
      state.sellClickedAmount = amount;
      state.sellClickedTotal = state.clickedStockPrice * amount;
    },
    clickSellBtn: (state) => {
      const cellClickedAmount = parseInt(state.sellClickedAmount);
      let checkHaveStock = false;
      state.haveStocks.find((item) => {
        if (item.label === state.clickedLebel) checkHaveStock = true;
        return null;
      });
      if (checkHaveStock) {
        state.haveStocks.map((item, index) => {
          if (item.amount === cellClickedAmount) {
            state.haveStocks.splice(index, 1);
            state.hasMoney += state.sellClickedTotal;
            state.sellClickedAmount = 0;
            state.sellClickedTotal = 0;
            state.spendMoney.map((item, index) => {
              if (item.label === state.clickedLebel) {
                state.spendMoney.splice(index, 1);
              }
              return null;
            });
            return swal({ title: "판매 성공!", icon: "success" });
          } else if (item.amount > cellClickedAmount) {
            item.amount -= cellClickedAmount;
            state.hasMoney += state.sellClickedTotal;
            state.sellClickedAmount = 0;
            state.sellClickedTotal = 0;
            state.spendMoney.map((item, index) => {
              if (item.label === state.clickedLebel) {
                item.price -= state.sellClickedTotal;
              }
              return null;
            });
            return swal({ title: "판매 성공!", icon: "success" });
          } else if (item.amount < cellClickedAmount) {
            return swal({
              title: "갯수를 다시 설정해주세요!",
              icon: "warning",
            });
          }
          return null;
        });
      } //
      else {
        swal({ title: "소유하고 있지 않습니다!", icon: "warning" });
      }
    },
    onLoadData: (state, action) => {
      if (action.payload.hint !== undefined) {
        state.haveHints = action.payload.hint.haveHints;
        state.hintPoint = action.payload.hint.hintPoint;
      }
      if (action.payload.stocks !== undefined) {
        state.stocks = action.payload.stocks;
      }
      if (action.payload.user !== undefined) {
        state.day = action.payload.user.day;
        state.hasMoney = action.payload.user.hasMoney;
        state.user = localStorage.getItem("token");
        state.haveStocks = action.payload.user.haveStocks;
        state.spendMoney = action.payload.user.spendMoney;
      }
      state.isLoading = false;
    },
    clickNextDay: (state) => {
      let stockPer = 0;
      const lastDay = 7;
      if (state.stocks[0].price.length < 2) {
        state.stocks.map((item, index) => {
          for (let i = 1; i <= lastDay - 1; i++) {
            stockPer = handlePercentAPI();
            state.stocks[index].price.push(
              Math.floor(
                item.price[item.price.length - 1] * (1 + stockPer / 100)
              )
            );
          }
          return null;
        });
      }
      if (state.day !== 7) {
        state.day = ++state.day;
        state.clickedAmount = 0;
        state.clickedTotal = 0;
        state.sellClickedAmount = 0;
        state.sellClickedTotal = 0;
      } else {
        swal("마지막 날입니다. 다시 하고 싶으시면 리셋을 눌러주세요!");
      }
    },
    changeCurrentChart: (state, action) => {
      state.stocks.map((item) => {
        if (item.label === state.chartStock.datasets[0].label) {
          state.clickedStockPrice = item.price[state.day - 1];
          state.chartStock.datasets[0].data = item.price.slice(0, state.day);
        }
        return null;
      });
    },
    changeCurrentHasStocks: (state, action) => {
      state.haveStocks.map((item) => {
        state.stocks.map((item2) => {
          if (state.haveStocks.length !== 0 && item.label === item2.label) {
            item.price = item2.price[state.day - 1];
          }
          return null;
        });
        return null;
      });
    },
    changeDoughnut: (state, action) => {
      let labelArr = [];
      let priceArr = [];
      if (state.haveStocks.length === 1) {
        state.isDoughnutLoading = false;
      } else {
        state.haveStocks.map((item) => {
          if (typeof item.label === "string") {
            labelArr.push(item.label);
            state.doughnutData.labels = labelArr;
          }
          if (typeof item.amount === "number") {
            priceArr.push(item.amount * item.price);
            state.doughnutData.datasets[0].data = priceArr;
          }
          return null;
        });
        state.isDoughnutLoading = true;
      }
    },
    clickResetBtn: (state, action) => {
      let price = 0;
      state.isDoughnutLoading = false;
      state.clickedAmount = 0;
      state.sellClickedAmount = 0;
      state.sellClickedTotal = 0;
      state.clickedTotal = 0;
      state.stocks.map((item) => {
        if (item.label === state.clickedLebel) {
          price = item.price[0];
          state.clickedStockPrice = price;
        }
        return null;
      });
      state.chartStock.datasets[0].data = [price];
    },
    clickHintBtn: (state, action) => {
      const { label, point } = action.payload;
      const day = state.day;
      let per = 0;
      let hintCheck = true;
      state.haveHints.map((item) => {
        if (item.label === label && item.day === day) hintCheck = false;
        return null;
      });
      if (!hintCheck) {
        swal({
          icon: "error",
          text: "하루에 같은 라벨의 힌트를 중복으로 볼 수 없습니다.",
        });
      } //
      else if (day === 1 || day === 7) {
        day === 1
          ? swal("첫날은 힌트가 제공되지 않습니다.")
          : swal("마지막 날은 힌트가 제공되지 않습니다.");
      } //
      else {
        if (point > state.hintPoint) {
          swal({ icon: "error", text: "포인트가 부족합니다." });
        } else {
          state.stocks.map((item) => {
            if (item.label === label) {
              per = ((item.price[day] - item.price[day - 1]) / 100).toFixed(1);
            }
            return null;
          });
          const text = makeHintAPI(parseInt(per), point, label.split(" ")[1]);
          state.haveHints.push({ day, label, point, text });
          state.hintPoint -= point;
          swal({ title: `${label}`, text: `${text}` });
        }
      }
    },
  },
});
export const {
  clickBuyPerBtn,
  changeAmount,
  clickBuyBtn,
  clickLabel,
  clickPerSellBtn,
  changeSellAmount,
  clickSellBtn,
  saveStockData,
  onLoadData,
  clickNextDay,
  changeCurrentChart,
  changeCurrentHasStocks,
  changeDoughnut,
  clickResetBtn,
  clickHintBtn,
} = mainSlice.actions;

export default mainSlice.reducer;
