import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/login/login";
import LoadingContainer from "./containers/loadingContainer/loadingContainer";
function App({ auth, database }) {
  return (
    <BrowserRouter basename="/react_stockgame">
      <Switch>
        <Route exact path="/">
          <Login auth={auth} />
        </Route>
        <Route path="/main">
          <LoadingContainer content="Main" database={database} />
        </Route>
        <Route path="/profile">
          <LoadingContainer content="Profile" database={database} />
        </Route>
        <Route path="/hint">
          <LoadingContainer content="Hint" database={database} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
