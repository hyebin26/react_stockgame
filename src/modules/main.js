import { createSlice, current } from "@reduxjs/toolkit";
import swal from "sweetalert";
import { stock } from "../service/chart_data";
import { users, stocks } from "./object";
import Database from "../service/database";

const database = new Database();

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
    haveStocks: [{ label: "H전자", amount: 5, price: 15000 }],
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
        // state.haveStocks.push({ label, price, amount });
        // state.haveStocks.map((item) => {
        //   if (item.label === label) {
        //     item.amount += amount;
        //     state.haveStocks.pop();
        //   }
        // });
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
      stocks.map((item) => {
        if (item.label === action.payload) {
          item.price.map((item2) => price.push(item2));
        }
      });
      state.chartStock.datasets[0].data = price;

      state.clickedLebel = action.payload;
      state.clickedStockPrice = price[price.length - 1];
    },
    //
    clickPerSellBtn: (state, action) => {
      const label = state.clickedLebel;
      const percent = action.payload;
      const hasStock = users[state.user].haveStock;
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
      const currentUser = state.user;
      users[currentUser].haveStock.map((item, index) => {
        if (item.label === state.clickedLebel) {
          if (item.amount === state.sellClickedAmount) {
            users[currentUser].haveStock.splice(index, 1);
            state.hasMoney += state.sellClickedTotal;
            currentUser.money += state.sellClickedTotal;
            state.sellClickedAmount = 0;
            state.sellClickedTotal = 0;
            if (currentUser === "default") {
              users[localStorage.getItem("token")] = users.default;
              currentUser = localStorage.getItem("token");
            }
            return swal({ title: "판매를 성공하였습니다.", icon: "success" });
          } else if (item.amount > state.sellClickedAmount) {
            item.amount -= state.sellClickedAmount;
            currentUser.money += state.sellClickedTotal;
            state.hasMoney += state.sellClickedTotal;
            if (currentUser === "default") {
              users[localStorage.getItem("token")] = users.default;
              currentUser = localStorage.getItem("token");
            }
            return swal({ title: "판매를 성공하였습니다.", icon: "success" });
          } else if (item.amount < state.sellClickedAmount) {
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
    //
    onLoadData: (state, action) => {
      state.stocks = action.payload.stocks;
      state.day = action.payload.user.day;
      state.hasMoney = action.payload.user.hasMoney;
      state.user = localStorage.getItem("token");
      state.isLoading = false;
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
} = mainSlice.actions;

export default mainSlice.reducer;
