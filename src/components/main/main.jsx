import React from "react";
import Header from "../header/header";
import MainChart from "../main_chart/mainChart";
import MainTrading from "../main_trading/mainTrading";
import StockItem from "../main_stockItem/mainStockItem";
import styles from "./main.module.css";
import { useEffect } from "react/cjs/react.development";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { loadUserData } from "../../modules/main";

const Main = (props) => {
  const hisotry = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!localStorage.getItem("token")) hisotry.replace("/");
  }, [localStorage.getItem("token")]);
  useEffect(() => {
    dispatch(loadUserData());
  });
  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.mainTrading}>
        <div className={styles.trading_container}>
          <MainChart />
          <MainTrading />
        </div>
      </section>
      <section className={styles.mainItemContainer}>
        <StockItem />
      </section>
    </div>
  );
};

export default Main;
