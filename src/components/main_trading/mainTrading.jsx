import React from "react";
import MainAct from "../main_act/mainAct";
import MainBtn from "../main_btn/mainBtn";
import styles from "./mainTrading.module.css";

const MainTrading = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.buy}>
        <MainAct title={"매수"} />
      </div>
      <div className={styles.sell}>
        <MainAct title={"매도"} />
      </div>
    </div>
  );
};

export default MainTrading;
