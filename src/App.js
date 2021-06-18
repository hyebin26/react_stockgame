import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/login/login";
import MainContainer from "./containers/mainContainer/mainContainer";
import Profile from "./components/profile/profile";
function App({ auth, database }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login auth={auth} />
        </Route>
        <Route path="/main">
          <MainContainer database={database} />
        </Route>
        <Route path="/profile">
          <Profile database={database} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
