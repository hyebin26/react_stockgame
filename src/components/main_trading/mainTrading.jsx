import React from "react";
import MainBuySectionContainer from "../../containers/mainBuySectionContainer/mainBuySectionContainer";
import MainSellSectionContainer from "../../containers/mainSellSectionContainer/mainSellSectionContainer";
import styles from "./mainTrading.module.css";

const MainTrading = ({ database }) => {
  return (
    <div className={styles.container}>
      <div className={styles.buy}>
        <MainBuySectionContainer database={database} />
      </div>
      <div className={styles.sell}>
        <MainSellSectionContainer database={database} />
      </div>
    </div>
  );
};

export default MainTrading;
