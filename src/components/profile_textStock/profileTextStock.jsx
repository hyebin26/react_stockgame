import React from "react";
import styles from "./profileTextStock.module.css";

const ProfileTextStock = (props) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.moneyBox} ${styles.titleBox}`}>
        <p>총 보유자산</p>
        <p className={styles.haveMoney}>
          <strong className={styles.money}>5000 </strong>
          KRW
        </p>
      </div>
      <div className={styles.moneyBox}>
        <p>총평가손일</p>
        <p className={styles.haveMoney}>
          <strong className={styles.money}>5000 </strong>
          KRW
        </p>
      </div>
      <div className={styles.moneyBox}>
        <p>총평가수익률</p>
        <p className={styles.haveMoney}>
          <strong className={styles.money}>5000 </strong>
          KRW
        </p>
      </div>
    </div>
  );
};

export default ProfileTextStock;
