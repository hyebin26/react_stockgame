import React from "react";
import styles from "./mainBtn.module.css";

const MainBtn = ({ title, onClickBuyBtn, onClickSellBtn }) => {
  if (title === "매수")
    return (
      <button className={styles.buyBtn} onClick={onClickBuyBtn}>
        매수
      </button>
    );
  return (
    <button className={styles.sellBtn} onClick={onClickSellBtn}>
      매도
    </button>
  );
};

export default MainBtn;
