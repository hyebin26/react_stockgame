import React from "react";
import MainTrading from "../main_trading/mainTrading";
import styles from "./main.module.css";
import MainStockItemContainer from "../../containers/main_stockItemContainer/mainStockItemContainer";
import MainChartContainer from "../../containers/mainChartContainer/mainChartContainer";
import HeaderContainer from "../../containers/headerContainer/headerContainer";

const Main = ({ isLoading, database }) => {
  if (isLoading === true)
    return (
      <section className={styles.loadingContainer}>
        <div className={styles.loading}></div>
      </section>
    );
  return (
    <div className={styles.container}>
      <HeaderContainer database={database} />
      <section className={styles.mainTrading}>
        <div className={styles.trading_container}>
          <MainChartContainer />
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
