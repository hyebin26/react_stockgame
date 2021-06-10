import React from "react";
import styles from "./mainPerBtn.module.css";

const MainPerBtn = ({ title, onClickSellBtn, onClickBuyBtn }) => {
  return (
    <div className={styles.container}>
      <button onClick={title === "매도" ? onClickSellBtn : onClickBuyBtn}>
        0%
      </button>
      <button onClick={title === "매도" ? onClickSellBtn : onClickBuyBtn}>
        25%
      </button>
      <button onClick={title === "매도" ? onClickSellBtn : onClickBuyBtn}>
        50%
      </button>
      <button onClick={title === "매도" ? onClickSellBtn : onClickBuyBtn}>
        75%
      </button>
      <button onClick={title === "매도" ? onClickSellBtn : onClickBuyBtn}>
        100%
      </button>
    </div>
  );
};

export default MainPerBtn;
