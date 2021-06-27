import React from "react";
import styles from "./profileItemList.module.css";

const ProfileItemList = ({
  crtPrice,
  statement,
  price,
  amount,
  label,
  totalPer,
}) => {
  console.log(totalPer);
  return (
    <li className={styles.item}>
      <p className={styles.title}>{label}</p>
      <p className={styles.amount}>{amount}개</p>
      <p className={styles.price}>{price.toLocaleString("ko-KR")}원</p>
      <p className={styles.crtPrice}>{crtPrice.toLocaleString("ko-KR")}원</p>
      <p
        className={
          statement === 0
            ? `${styles.statement}`
            : statement > 0
            ? `${styles.statement} ${styles.increase}`
            : `${styles.statement} ${styles.decrease}`
        }
      >
        {statement > 0
          ? "+" + statement.toLocaleString("ko-KR")
          : statement.toLocaleString("ko-KR")}
        원
      </p>
      <p
        className={
          totalPer === "0.00"
            ? `${styles.totalPer}`
            : totalPer > 0
            ? `${styles.totalPer} ${styles.increase}`
            : `${styles.totalPer} ${styles.decrease}`
        }
      >
        {totalPer > 0 ? "+" + totalPer : totalPer}%
      </p>
    </li>
  );
};

export default ProfileItemList;
