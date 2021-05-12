import React from "react";
import styles from "./mainTrading.module.css";

const MainTrading = (props) => {
  return (
    <div className={styles.container}>
      <div>
        <button>매수</button>
        <button>매도</button>
      </div>
      <div className={styles}>
        <div>매수가격</div>
        <input type="number" value="2000" />
      </div>
      <div className={styles}>
        <div>주문수량</div>
        <input type="number" value="2000" />
      </div>
      <div className={styles}>
        <div>주문총액</div>
        <input type="number" />
      </div>
      <div>
        <button>힌트3</button>
        <button>힌트1</button>
      </div>
      <div>
        <button>초기화</button>
        <button>매수</button>
      </div>
    </div>
  );
};

export default MainTrading;
