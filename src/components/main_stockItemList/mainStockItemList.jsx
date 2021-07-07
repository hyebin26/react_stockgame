import React from "react";
import { memo } from "react";
import MainHintBtnContainer from "../../containers/mainHintBtnContainer/mainHintBtnContainer";
import styles from "./mainStockItemList.module.css";

const MainStockItemList = memo(({ price, label, icon, onClickLabel, day }) => {
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
          <div className={styles.hintBtnContainer}>
            <MainHintBtnContainer point={3} label={label} />
            <MainHintBtnContainer point={1} label={label} />
          </div>
        </div>
        <div className={styles.priceContainer}>
          <p>가격: {price[day - 1]}</p>
          <span>전일대비: </span>
          <span
            className={
              isNaN(per)
                ? styles.zero
                : per > 0
                ? styles.perRed
                : styles.perBlue
            }
          >
            {isNaN(per) ? 0 : per > 0 ? `+${per}` : per}%
          </span>
        </div>
      </div>
    </li>
  );
});

export default MainStockItemList;
