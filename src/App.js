import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./components/main/main";
import styles from "./app.module.css";

const stocks = [
  { label: "H전자", price: [8000] },
  { label: "C엔터", price: [8000] },
  { label: "J반도체", price: [8000] },
  { label: "S바이오", price: [8000] },
];

const oneday = [
  {
    lebel: "H전자",
    bigHint: "급등할 것입니다",
    smallHint: "아마도 급등",
    price: 3000,
  },
  {
    lebel: "C엔터",
    bigHint: "급등할 것입니다",
    smallHint: "아마도 급등",
    price: 5000,
  },
  {
    lebel: "J반도체",
    bigHint: "급등할 것입니다",
    smallHint: "아마도 급등",
    price: 10000,
  },
  {
    lebel: "S바이오",
    bigHint: "급등할 것입니다",
    smallHint: "아마도 급등",
    price: 500,
  },
];

const hello = () => {
  stocks.map((stock, index) => {
    stock.price.push(oneday[index].price);
    //return stock.price.concat(oneday[index].price);
  });
};
hello();
// stocks.map((item) => console.log(item));

function App() {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/login">
            <Main />
          </Route>
          <Route path="/profile">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
