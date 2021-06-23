import React from "react";
import { useSelector } from "react-redux";
import styles from "./profileTextMoney.module.css";

const ProfileTextMoney = (props) => {
  const { hasMoney } = useSelector((state) => state.main);
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
          <strong className={styles.money}>5000 </strong>
          KRW
        </p>
      </div>
      <div className={styles.moneyBox}>
        <p>총평가</p>
        <p className={styles.haveMoney}>
          <strong className={styles.money}>5000 </strong>
          KRW
        </p>
      </div>
    </div>
  );
};

export default ProfileTextMoney;
