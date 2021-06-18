import React from "react";
import MainHintBtn from "../main_hintBtn/mainHintBtn";
import styles from "./mainStockItemList.module.css";

const MainStockItemList = ({ price, label, icon, onClickLabel, day }) => {
  const clickLabel = () => {
    onClickLabel(label);
  };
  let per = ((price[day - 1] - price[day - 2]) / 100).toFixed(1);
  return (
    <li className={styles.itemContainer} onClick={clickLabel}>
      <div className={styles.iconContainer}>{icon}</div>
      <div className={styles.textContainer}>
        <div className={styles.hintContainer}>
          <span className={styles.hintTitle}>{label}</span>
          <MainHintBtn hintPoint={3} />
          <MainHintBtn hintPoint={1} />
        </div>
        <div className={styles.priceContainer}>
          <p>가격: {price[day - 1]}</p>
          <span>전일대비: </span>
          <span className={per > 0 ? styles.perRed : styles.perBlue}>
            {isNaN(per) ? 0 : per > 0 ? `+${per}` : per}%
          </span>
        </div>
      </div>
    </li>
  );
};

export default MainStockItemList;
