import { createSlice } from "@reduxjs/toolkit";
import swal from "sweetalert";
import { users, stocks } from "./object";

const sellSlice = createSlice({
  name: "sell",
  initialState: {
    user: localStorage.getItem("token"),
    hasMoney: users[localStorage.getItem("token")].money,
    day: users[localStorage.getItem("token")].currentDay,
    clickedStockPrice:
      stocks[users[localStorage.getItem("token")].currentDay][0].data,
    clickedTotal: 0,
    clickedAmount: 0,
    clickedLebel: "H전자",
  },
  reducers: {
    clickPerSellBtn: (state, action) => {
      const lebel = state.clickedLebel;
      const percent = action.payload;
      const hastock = users[state.user].haveStock;
      hastock.map((item) => {
        if (item.lebel === lebel) {
          state.clickedAmount = Math.ceil(item.amount * (percent / 100));
          state.clickedTotal = state.clickedAmount * state.clickedStockPrice;
        }
      });
    },
    changeSellAmount: (state, action) => {
      const amount = action.payload;
      state.clickedAmount = amount;
      state.clickedTotal = state.clickedStockPrice * amount;
    },
    clickSellBtn: (state) => {
      const currentUser = users[state.user];
      currentUser.haveStock.map((item, index) => {
        if (item.lebel === state.clickedLebel) {
          if (item.amount === state.clickedAmount) {
            currentUser.haveStock.splice(index, 1);
            state.hasMoney += state.clickedTotal;
            state.clickedAmount = 0;
            state.clickedTotal = 0;
            return swal({ title: "판매를 성공하였습니다.", icon: "success" });
          } else if (item.amount > state.clickedAmount) {
            item.amount -= state.clickedAmount;
            state.hasMoney += state.clickedTotal;
            return swal({ title: "판매를 성공하였습니다.", icon: "success" });
          } else if (item.amount < state.clickedAmount) {
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
  },
});

export const { changeSellAmount, clickPerSellBtn, clickSellBtn } =
  sellSlice.actions;

export default sellSlice.reducer;
