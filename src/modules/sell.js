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
    clickSellBtn: (state, action) => {
      // 같은 lebel을 가진 stock이존재하는지 확인 
      // 갯수가 item.amount 보다 작거나 같을 시 판매 
      // hasMoney + 
      // haveStock에서 amount만큼 삭제 
      // haveStock과 amount양이 같을 시 haveStock에서 삭제
    },
  },
});

export const { changeSellAmount, clickPerSellBtn } = sellSlice.actions;

export default sellSlice.reducer;
