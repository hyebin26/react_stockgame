import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./components/main/main";
import styles from "./app.module.css";
import Login from "./components/login/login";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/profile">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
