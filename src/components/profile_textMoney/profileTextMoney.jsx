import React from "react";
import styles from "./profileTextMoney.module.css";

const ProfileTextMoney = (props) => {
  return (
    <div className={styles.moneyContainer}>
      <div className={`${styles.moneyBox} ${styles.titleBox}`}>
        <p>보유 KRW</p>
        <p className={styles.haveMoney}>
          <strong className={styles.money}>5000 </strong>
          KRW
        </p>
      </div>
      <div className={styles.moneyBox}>
        <p>총매수금액</p>
        <p className={styles.haveMoney}>
          <strong className={styles.money}>5000 </strong>
          KRW
        </p>
      </div>
      <div className={styles.moneyBox}>
        <p>총평가금액</p>
        <p className={styles.haveMoney}>
          <strong className={styles.money}>5000 </strong>
          KRW
        </p>
      </div>
    </div>
  );
};

export default ProfileTextMoney;
