import React from "react";
import styles from "./mainPerBtn.module.css";

const MainPerBtn = ({ title, onClickPerSellBtn, onClickPerBuyBtn }) => {
  return (
    <div className={styles.container}>
      <button onClick={title === "매도" ? onClickPerSellBtn : onClickPerBuyBtn}>
        0%
      </button>
      <button onClick={title === "매도" ? onClickPerSellBtn : onClickPerBuyBtn}>
        25%
      </button>
      <button onClick={title === "매도" ? onClickPerSellBtn : onClickPerBuyBtn}>
        50%
      </button>
      <button onClick={title === "매도" ? onClickPerSellBtn : onClickPerBuyBtn}>
        75%
      </button>
      <button onClick={title === "매도" ? onClickPerSellBtn : onClickPerBuyBtn}>
        100%
      </button>
    </div>
  );
};

export default MainPerBtn;
