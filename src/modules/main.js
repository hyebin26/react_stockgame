import { createSlice } from "@reduxjs/toolkit";
import swal from "sweetalert";
import { stock } from "../service/chart_data";
import { users, stocks } from "./object";
import Database from "../service/database";

const database = new Database();

export const mainSlice = createSlice({
  name: "main",
  initialState: {
    user: localStorage.getItem("token"),
    hasMoney: users["token"].money,
    day: users["token"].currentDay,
    clickedStockPrice: stocks[0].price[0],
    clickedTotal: 0,
    clickedAmount: 0,
    chartStock: stock,
    sellClickedTotal: 0,
    sellClickedAmount: 0,
    clickedLebel: "H전자",
  },
  reducers: {
    clickBuyPerBtn: (state, action) => {
      const percent = action.payload;
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
        users[state.user].money = state.hasMoney - price * amount;
        state.hasMoney = state.hasMoney - price * amount;

        users[state.user].haveStock.map((item) => {
          if (item.label === label) {
            item.amount += amount;
          } else {
            users[state.user].haveStock.push({ label, price, amount });
          }
        });
        if (users[state.user].haveStock.length === 0) {
          users[state.user].haveStock.push({ label, price, amount });
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
      const currentUser = users[state.user];
      currentUser.haveStock.map((item, index) => {
        if (item.label === state.clickedLebel) {
          if (item.amount === state.sellClickedAmount) {
            currentUser.haveStock.splice(index, 1);
            state.hasMoney += state.sellClickedTotal;
            currentUser.money += state.sellClickedTotal;
            state.sellClickedAmount = 0;
            state.sellClickedTotal = 0;
            return swal({ title: "판매를 성공하였습니다.", icon: "success" });
          } else if (item.amount > state.sellClickedAmount) {
            item.amount -= state.sellClickedAmount;
            currentUser.money += state.sellClickedTotal;
            state.hasMoney += state.sellClickedTotal;
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
    saveUserData: (state, action) => {
      database.saveUserData(state.user, users);
    },
    saveStockData: (state, action) => {
      database.saveStockData(state.user, stocks);
    },
    loadUserData: (state, action) => {
      const saveLoadData = (data) => {
        console.log(data);
      };
      database.loadData("user", saveLoadData);
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
  loadUserData,
  saveUserData,
  saveStockData,
} = mainSlice.actions;

export default mainSlice.reducer;
