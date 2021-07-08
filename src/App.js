import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/login/login";
import HintContainer from "./containers/hintContainer/hintContainer";
import MainContainer from "./containers/mainContainer/mainContainer";
import ProfileContainer from "./containers/profileContainer/profileContainer";
function App({ auth, database }) {
  return (
    <BrowserRouter basename="/react_stockgame">
      <Switch>
        <Route exact path="/">
          <Login auth={auth} />
        </Route>
        <Route path="/main">
          <MainContainer database={database} />
        </Route>
        <Route path="/profile">
          <ProfileContainer database={database} />
        </Route>
        <Route path="/hint">
          <HintContainer database={database} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
