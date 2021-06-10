import { createSlice, current } from "@reduxjs/toolkit";
import swal from "sweetalert";
import { stock } from "../service/chart_data";
import { handlePercentAPI } from "../service/percent";

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
    clickedLebel: "H전자",
    haveStocks: [],
    stocks: [],
    isLoading: true,
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
      if (currentHasMoney >= amount * price) {
        state.hasMoney = currentHasMoney - price * amount;
        const checkHaveStocks = state.haveStocks.find(
          (item) => item.label === label
        );
        if (!checkHaveStocks) {
          state.haveStocks.push({ label, price, amount });
        } else {
          state.haveStocks.map((item) => {
            if (item.label === label) {
              item.amount += amount;
            }
          });
        }
        swal({ title: "매수성공", icon: "success" });
        state.clickedAmount = 0;
        state.clickedTotal = 0;
      } else {
        swal({ title: "돈이 부족해요!", icon: "warning" });
        state.clickedAmount = 0;
        state.clickedTotal = 0;
      }
    },
    clickLabel: (state, action) => {
      state.chartStock.datasets[0].label = action.payload;
      const price = [];
      state.stocks.map((item) => {
        if (item.label === action.payload) {
          item.price.map((item2) => price.push(item2));
        }
      });
      state.chartStock.datasets[0].data = price;

      state.clickedTotal = 0;
      state.clickedAmount = 0;
      state.sellClickedAmount = 0;
      state.sellClickedTotal = 0;
      state.clickedLebel = action.payload;
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
      });
    },
    changeSellAmount: (state, action) => {
      const amount = action.payload;
      state.sellClickedAmount = amount;
      state.sellClickedTotal = state.clickedStockPrice * amount;
    },
    clickSellBtn: (state) => {
      const cellClickedAmount = parseInt(state.sellClickedAmount);
      state.haveStocks.map((item, index) => {
        if (item.label === state.clickedLebel) {
          if (item.amount === cellClickedAmount) {
            state.haveStocks.splice(index, 1);
            state.hasMoney += state.sellClickedTotal;
            state.sellClickedAmount = 0;
            state.sellClickedTotal = 0;
            return swal({ title: "판매를 성공하였습니다.", icon: "success" });
          } else if (item.amount > cellClickedAmount) {
            item.amount -= cellClickedAmount;
            state.hasMoney += state.sellClickedTotal;
            state.sellClickedAmount = 0;
            state.sellClickedTotal = 0;
            return swal({ title: "판매를 성공하였습니다.", icon: "success" });
          } else if (item.amount < cellClickedAmount) {
            return swal({
              title: "갯수를 다시 설정해주세요!",
              icon: "warning",
            });
          }
        } //
        else {
          return swal({ title: "소유하고 있지 않습니다!", icon: "warning" });
        }
      });
    },
    onLoadData: (state, action) => {
      state.stocks = action.payload.stocks;
      state.day = action.payload.user.day;
      state.hasMoney = action.payload.user.hasMoney;
      state.user = localStorage.getItem("token");
      state.isLoading = false;
      state.haveStocks = action.payload.user.haveStocks;
    },
    clickNextDay: (state, action) => {
      let stockPer = 0;
      const lastDay = 7;
      state.stocks.map((item, index) => {
        stockPer = handlePercentAPI();
        for (let i = 1; i <= lastDay - 1; i++) {
          state.stocks[index].price.push(
            Math.floor(item.price[item.price.length - 1] * (1 + stockPer / 100))
          );
        }
      });
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
} = mainSlice.actions;

export default mainSlice.reducer;
