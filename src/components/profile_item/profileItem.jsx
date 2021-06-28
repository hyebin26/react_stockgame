import React from "react";
import ProfileItemListContainer from "../../containers/profileItemLIstContainer/profileItemListContainer";
import styles from "./profileItem.module.css";

const ProfileItem = (props) => {
  return (
    <div className={styles.container}>
      <p className={styles.stock}>보유주식 목록</p>
      <ul className={styles.itemContainer}>
        <li className={styles.category}>
          <p className={styles.title}>보유주식</p>
          <p className={styles.amount}>보유수량</p>
          <p className={styles.price}>매수평균</p>
          <p className={styles.crtPrice}>현재금액</p>
          <p className={styles.statement}>평가손익</p>
          <p className={styles.totalPer}>수익률(%)</p>
        </li>
        <ProfileItemListContainer />
      </ul>
    </div>
  );
};

export default ProfileItem;
