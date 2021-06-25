import React from "react";
import styles from "./profileItemList.module.css";

const ProfileItemList = (props) => {
  return (
    <li className={styles.standard}>
      <p className={styles.title}>H전자</p>
      <p className={styles.amount}>10개</p>
      <p className={styles.average}>15000</p>
      <p className={styles.buying}>150000</p>
      <p className={styles.currentPrice}>160000</p>
      <p className={styles.currentPricePer}>10%</p>
    </li>
  );
};

export default ProfileItemList;
