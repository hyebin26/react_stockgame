import React from "react";
import styles from "./profileTextMoney.module.css";

const ProfileTextMoney = ({
  hasMoney,
  totalBuyingPrice,
  currentBuyingPrice,
}) => {
  return (
    <div className={styles.moneyContainer}>
      <div className={`${styles.moneyBox} ${styles.titleBox}`}>
        <p>보유 KRW</p>
        <p className={styles.haveMoney}>
          <strong className={styles.money}>
            {hasMoney.toLocaleString("ko-KR")}
          </strong>
          KRW
        </p>
      </div>
      <div className={styles.moneyBox}>
        <p>총매수</p>
        <p className={styles.haveMoney}>
          <strong className={styles.money}>
            {totalBuyingPrice.toLocaleString("ko-KR")}
          </strong>
          KRW
        </p>
      </div>
      <div className={styles.moneyBox}>
        <p>총평가</p>
        <p className={styles.haveMoney}>
          <strong className={styles.money}>
            {currentBuyingPrice.toLocaleString("ko-KR")}
          </strong>
          KRW
        </p>
      </div>
    </div>
  );
};

export default ProfileTextMoney;
