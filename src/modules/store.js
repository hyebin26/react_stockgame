import { configureStore } from "@reduxjs/toolkit";
import buyReducer from "./buy";
import sellReducer from "./sell";
import itemReducer from "./item";

export default configureStore({
  reducer: { buy: buyReducer, sell: sellReducer, item: itemReducer },
});
