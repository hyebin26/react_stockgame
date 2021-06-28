import { BrowserRouter, Route, Switch } from "react-router-dom";
import Hint from "./components/hint/hint";
import Login from "./components/login/login";
import MainContainer from "./containers/mainContainer/mainContainer";
import ProfileContainer from "./containers/profileContainer/profileContainer";
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
          <ProfileContainer database={database} />
        </Route>
        <Route path="/hint">
          <Hint />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
