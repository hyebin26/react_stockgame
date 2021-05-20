import { createSlice } from "@reduxjs/toolkit";
import swal from "sweetalert";
import { users, stocks } from "./object";

export const tradeSlice = createSlice({
  name: "trade",
  initialState: {
    user: localStorage.getItem("token"),
    hasMoney: users[localStorage.getItem("token")].money,
    clickedStockPrice:
      stocks[users[localStorage.getItem("token")].currentDay][0].data,
    clickedTotal: 0,
    clickedAmount: 0,
    day: users[localStorage.getItem("token")].currentDay,
  },
  reducers: {
    handlePerBtn: (state, action) => {
      const percent = action.payload;
      state.clickedTotal = state.hasMoney * (percent / 100);
      state.clickedAmount = state.clickedTotal / state.clickedStockPrice;
    },
    handleClickedStocks: (state, action) => {
      const { lebel } = action.payload;
      state.clickedStockPrice[state.day].map((item) => {
        if (item.lebel === lebel) {
          return item.data;
        }
      });
    },
    handleDefault: (state, action) => {
      const { day } = action.payload;
      state.day = day;
      state.clickedStockPrice = stocks[day][0].data;
    },
    clickTradeBtn: (state, action) => {
      const { trade, price, lebel, amount } = action.payload;
      if (trade === "매수") {
        if (state.hasMoney >= price) {
          users[state.user].haveStock.push({ lebel, price, amount });
          users[state.user].money = state.hasMoney - price;
          swal({ title: "매수성공", icon: "success" });
        } else {
          swal({ title: "돈이 부족해요!", icon: "warning" });
        }
      } //
      else {
        const realHaveStock = users[state.user].haveStock.map((item, i) => {
          if (item.lebel === lebel) {
            if (item.amount > amount) {
              item.amount -= amount;
              state.hasMoney += price;
            } else if (item.amount === amount) {
              state.hasMoney += price;
              realHaveStock.splice(i, 1);
            }
          } else {
            return item;
          }
        });
        users[state.user].haveStock = realHaveStock;
      }
    },
    changeAmount: (state, action) => {
      const clickedAmount = action.payload;
      state.clickedAmount = clickedAmount;
      state.clickedTotal = clickedAmount * state.clickedStockPrice;
    },
  },
});

export const {
  handlePerBtn,
  handleClickedStocks,
  handleDefault,
  clickTradeBtn,
  changeAmount,
} = tradeSlice.actions;

export default tradeSlice.reducer;

// haveMoney token으로 아이디를 불러와야함
// stockPrice => 동적으로 그 정보를 가져오는 방법 // 클릭하면 정보가 title이 lebel로 가게?
// totalMoney, amount
