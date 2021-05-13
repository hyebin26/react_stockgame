import React from "react";
import MainBtn from "../main_btn/mainBtn";
import styles from "./mainAct.module.css";

const MainAct = (props) => {
  const title = props.title;
  return (
    <>
      <p className={styles.title}>{title}</p>
      <div className={styles.itemContainer}>
        <p>{title}가격</p>
        <input type="number" value="2000" />
      </div>
      <div className={styles.itemContainer}>
        <p>주문수량</p>
        <input type="number" value="2000" />
      </div>
      <div className={styles.itemContainer}>
        <p>주문총액</p>
        <input type="number" />
        <button className={styles.reset}>초기화</button>
      </div>
      <div className={styles.itemContainer}>
        <MainBtn title={title} />
      </div>
    </>
  );
};

export default MainAct;
