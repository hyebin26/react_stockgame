import { createSlice } from "@reduxjs/toolkit";
import { stock } from "../service/chart_data";
import { stocks } from "./object";

export const itemSlice = createSlice({
  name: "item",
  initialState: {
    currentLabel: "H전자",
    day: 1,
    price: stock.datasets[0].data[1],
    stock: stock,
  },
  reducers: {
    clickLabel: (state, action) => {
      state.stock.datasets[0].label = action.payload;
      //stocks에 같은 라벨을 가진 price를 푸시한다.
      const price = [];
      console.log(stocks);
      stocks.map((item) => {
        if (item.label === action.payload) {
          for (let i = 0; i <= state.day; i++) {
            price.push(item.price[i]);
          }
        }
      });
      state.stock.datasets[0].data = price;
    },
  },
});

export const { clickLabel } = itemSlice.actions;

export default itemSlice.reducer;

//바껴야 하는 것은 chat_data
