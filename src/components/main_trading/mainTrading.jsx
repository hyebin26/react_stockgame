import React from "react";
import MainBuySectionContainer from "../../containers/mainBuySectionContainer/mainBuySectionContainer";
import MainSellSection from "../main_sellSection/mainSellSection";
import styles from "./mainTrading.module.css";

const MainTrading = ({ database }) => {
  return (
    <div className={styles.container}>
      <div className={styles.buy}>
        <MainBuySectionContainer database={database} />
      </div>
      <div className={styles.sell}>
        <MainSellSection database={database} />
      </div>
    </div>
  );
};

export default MainTrading;
