import { configureStore } from "@reduxjs/toolkit";
import tradeReducer from "./trade";

export default configureStore({
  reducer: { trade: tradeReducer },
});
