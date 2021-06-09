import React from "react";
import Header from "../header/header";
import MainChart from "../main_chart/mainChart";
import MainTrading from "../main_trading/mainTrading";
import styles from "./main.module.css";
import MainStockItemContainer from "../../containers/main_stockItemContainer/mainStockItemContainer";

const Main = ({ isLoading, database }) => {
  if (isLoading === true)
    return (
      <section className={styles.loadingContainer}>
        <div className={styles.loading}></div>
      </section>
    );
  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.mainTrading}>
        <div className={styles.trading_container}>
          <MainChart />
          <MainTrading database={database} />
        </div>
      </section>
      <section className={styles.mainItemContainer}>
        <MainStockItemContainer />
      </section>
    </div>
  );
};

export default Main;
