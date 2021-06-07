import React from "react";
import MainBuySection from "../main_buySection/mainBuySection";
import MainSellSection from "../main_sellSection/mainSellSection";
import styles from "./mainTrading.module.css";

const MainTrading = ({ database }) => {
  return (
    <div className={styles.container}>
      <div className={styles.buy}>
        <MainBuySection database={database} />
      </div>
      <div className={styles.sell}>
        <MainSellSection database={database} />
      </div>
    </div>
  );
};

export default MainTrading;
