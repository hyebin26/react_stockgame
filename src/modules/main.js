import { createSlice } from "@reduxjs/toolkit";
import swal from "sweetalert";
import { stock } from "../service/chart_data";
import { users, stocks } from "./object";
import Database from "../service/database";

const database = new Database();

export const mainSlice = createSlice({
  name: "main",
  initialState: {
    user: "default",
    hasMoney: users["default"].money,
    day: users["default"].currentDay,
    clickedStockPrice: stocks[0].price[0],
    clickedTotal: 0,
    clickedAmount: 0,
    chartStock: stock,
    sellClickedTotal: 0,
    sellClickedAmount: 0,
    clickedLebel: "H전자",
    haveStocks: users["default"].haveStock,
    stocks: stocks,
  },
  reducers: {
    clickBuyPerBtn: (state, action) => {
      const percent = action.payload;
      console.log(state.haveStocks, "clickTotal");
      state.clickedAmount = Math.floor(
        (state.hasMoney * (percent / 100)) / state.clickedStockPrice
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
      const amount = state.clickedAmount;
      const label = state.clickedLebel;
      if (state.hasMoney >= amount * price) {
        state.hasMoney = state.hasMoney - price * amount;
        state.haveStocks.map((item) => {
          if (item.label === label) {
            item.amount += amount;
          } else {
            state.haveStocks.push({ label, price, amount });
          }
        });
        swal({ title: "매수성공", icon: "success" });
        state.clickedAmount = 0;
        state.clickedTotal = 0;
      } else {
        swal({ title: "돈이 부족해요!", icon: "warning" });
        state.clickedAmount = 0;
        state.clickedTotal = 0;
      }
    },
    //
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
    onSaveUserData: (state, action) => {
      //매수 매도 클릭 시
      database.saveUserData(state.user, state.haveStocks);
    },
    onSaveStockData: (state, action) => {
      // database.saveStockData(state.user, stocks);
      // next day 클릭 시
    },
    loadData: (state, action) => {
      // if (action.payload !== null) {
      //   const { stocks, user } = action.payload;
      //   state.stocks = stocks;
      //   state.haveStocks = user.haveStock;
      //   state.hasMoney = user.money;
      //   state.day = user.currentDay;
      // }
      console.log(state.clickedTotal);
      console.log("hello");
      state.user = localStorage.getItem("token");
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
  onSaveUserData,
  saveStockData,
  loadData,
} = mainSlice.actions;

export default mainSlice.reducer;
