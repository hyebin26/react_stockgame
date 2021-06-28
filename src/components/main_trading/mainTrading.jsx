import React from "react";
import MainBuySectionContainer from "../../containers/mainBuySectionContainer/mainBuySectionContainer";
import MainSellSectionContainer from "../../containers/mainSellSectionContainer/mainSellSectionContainer";
import styles from "./mainTrading.module.css";

const MainTrading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buy}>
        <MainBuySectionContainer />
      </div>
      <div className={styles.sell}>
        <MainSellSectionContainer title={"매도"} />
      </div>
    </div>
  );
};

export default MainTrading;
