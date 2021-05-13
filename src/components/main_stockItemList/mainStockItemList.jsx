import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MainHintBtn from "../main_hintBtn/mainHintBtn";
import styles from "./mainStockItemList.module.css";

const MainStockItemList = (props) => {
  const { price, name } = props;
  return (
    <li className={styles.itemContainer}>
      <div className={styles.iconContainer}>
        <FontAwesomeIcon icon={faStar} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.hintContainer}>
          <span>{name}</span>
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
