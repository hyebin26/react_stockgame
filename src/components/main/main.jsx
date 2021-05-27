import React from "react";
import Header from "../header/header";
import MainChart from "../main_chart/mainChart";
import MainTrading from "../main_trading/mainTrading";
import StockItem from "../main_stockItem/mainStockItem";
import styles from "./main.module.css";

const Main = (props) => {
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
