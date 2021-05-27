import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import { Provider } from "react-redux";
import store from "./modules/store";
import Auth from "./service/auth";

const auth = new Auth();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App auth={auth} />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
