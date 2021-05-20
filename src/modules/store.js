import { configureStore } from "@reduxjs/toolkit";
import buyReducer from "./buy";

export default configureStore({
  reducer: { buy: buyReducer },
});
