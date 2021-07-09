import React from "react";
import { memo } from "react";

import MainTrading from "../main_trading/mainTrading";
import styles from "./main.module.css";
import MainStockItemContainer from "../../containers/mainStockItemContainer/mainStockItemContainer";
import MainChartContainer from "../../containers/mainChartContainer/mainChartContainer";
import HeaderContainer from "../../containers/headerContainer/headerContainer";

const Main = memo(({ isLoading, database }) => {
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
        <h2>Test</h2>
        <div className={styles.trading_container}>
          <MainChartContainer />
          <MainTrading />
        </div>
      </section>
      <section className={styles.mainItemContainer}>
        <MainStockItemContainer />
      </section>
    </div>
  );
});

export default Main;
