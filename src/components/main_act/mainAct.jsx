import React, { useEffect } from "react";
import MainBtn from "../main_btn/mainBtn";
import MainPerBtn from "../main_perBtn/mainPerBtn";
import styles from "./mainAct.module.css";
import { users } from "../../service/object";
import { stock } from "../../service/chart_data";
import { useState } from "react/cjs/react.development";

const MainAct = (props) => {
  const title = props.title;
  const currentPrice = stock.datasets[0].data[0];
  const [amount, setAmount] = useState();
  const [total, setTotal] = useState();
  const handleAmount = (e) => {
    setAmount(e.target.value);
    setTotal(e.target.value * currentPrice);
  };

  return (
    <>
      <p className={styles.title}>{title}</p>
      <div className={styles.itemContainer}>
        <p>{title}가격</p>
        <input type="number" value={currentPrice} />
      </div>
      <div className={styles.itemContainer}>
        <p>주문수량</p>
        <input type="number" value={amount} onChange={handleAmount} />
      </div>
      <div className={styles.itemContainer}>
        <p>주문총액</p>
        <input type="number" value={total} />
        <MainPerBtn />
      </div>
      <div className={styles.itemContainer}>
        <MainBtn title={title} />
      </div>
    </>
  );
};

export default MainAct;
