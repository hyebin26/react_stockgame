import { configureStore } from "@reduxjs/toolkit";
import buyReducer from "./buy";
import sellReducer from "./sell";

export default configureStore({
  reducer: { buy: buyReducer, sell: sellReducer },
});
