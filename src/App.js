import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./components/main/main";
import styles from "./app.module.css";
import Login from "./components/login/login";

function App({ auth, database }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login auth={auth} />
        </Route>
        <Route path="/main">
          <Main database={database} />
        </Route>
        <Route path="/profile">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
