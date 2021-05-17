import { createSlice } from "@reduxjs/toolkit";

const stocks = {
  oneday: [
    {
      lebel: "H전자",
      data: 15000,
      nextBigHint: "아마도 급등할 것입니다.",
      nextSmallHint: "급등할수도?",
    },
    {
      lebel: "Q반도체",
      data: 2000,
      nextBigHint: "떨어질거같아",
      nextSmallHint: "떨어질까 말까",
    },
  ],
  twoday: {},
};

export const buy = createSlice({
  name: "buy",
  initialState: stocks,
  reducers: {},
});

export default buy.reducer;
