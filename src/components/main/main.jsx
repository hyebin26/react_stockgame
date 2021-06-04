import React from "react";
import Header from "../header/header";
import MainChart from "../main_chart/mainChart";
import MainTrading from "../main_trading/mainTrading";
import StockItem from "../main_stockItem/mainStockItem";
import styles from "./main.module.css";
import { useEffect } from "react/cjs/react.development";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { onLoadData } from "../../modules/main";

const Main = ({ database }) => {
  const hisotry = useHistory();
  const dispatch = useDispatch();

  const updateDefaultData = (data) => dispatch(onLoadData(data));
  const updateData = (data) => {
    if (data === null) {
      database.loadData("default", updateDefaultData);
    } else {
      dispatch(onLoadData(data));
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) hisotry.replace("/");
  }, [localStorage.getItem("token")]);

  useEffect(() => {
    database.loadData(localStorage.getItem("token"), updateData);
  }, []);
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
