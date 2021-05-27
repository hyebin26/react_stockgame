import React from "react";
import { useDispatch } from "react-redux";
import { clickLabel } from "../../modules/main";
import MainHintBtn from "../main_hintBtn/mainHintBtn";
import styles from "./mainStockItemList.module.css";

const MainStockItemList = (props) => {
  const { price, label, icon } = props;
  const dispatch = useDispatch();
  const onClickLabel = () => {
    dispatch(clickLabel(label));
  };
  return (
    <li className={styles.itemContainer} onClick={onClickLabel}>
      <div className={styles.iconContainer}></div>
      <div className={styles.textContainer}>
        <div className={styles.hintContainer}>
          <span className={styles.hintTitle}>{label}</span>
          <MainHintBtn hintPoint={3} />
          <MainHintBtn hintPoint={1} />
        </div>
        <div className={styles.priceContainer}>
          <p>가격: {price}</p>
          <p>전일대비: 2.3%</p>
        </div>
      </div>
    </li>
  );
};

export default MainStockItemList;
