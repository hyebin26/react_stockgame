import React from "react";
import ProfileItemList from "../profile_itemList/profileItemList";
import styles from "./profileItem.module.css";

const ProfileItem = (props) => {
  return (
    <div className={styles.container}>
      <h2>보유주식 목록</h2>
      <ul className={styles.itemContainer}>
        <li className={styles.standard}>
          <p className={styles.title}>보유주식</p>
          <p className={styles.amount}>보유수량</p>
          <p className={styles.average}>매수평균가</p>
          <p className={styles.buying}>매수금액</p>
          <p className={styles.currentPrice}>평가금액</p>
          <p className={styles.currentPricePer}>평가손익</p>
        </li>
        <ProfileItemList />
      </ul>
    </div>
  );
};

export default ProfileItem;
