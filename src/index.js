import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import { Provider } from "react-redux";
import store from "./modules/store";
import Auth from "./service/auth";
import Database from "./service/database";

const auth = new Auth();
const database = new Database();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App auth={auth} database={database} />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
