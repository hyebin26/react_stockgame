import React from "react";
import MainBtn from "../main_btn/mainBtn";
import MainPerBtn from "../main_perBtn/mainPerBtn";
import styles from "./mainAct.module.css";
import { useState } from "react/cjs/react.development";
import { useDispatch, useSelector } from "react-redux";
import { changeAmount } from "../../modules/trade";

const MainAct = (props) => {
  const clickedTotal = useSelector((state) => state.trade.clickedTotal);
  const clickedAmount = useSelector((state) => state.trade.clickedAmount);
  const title = props.title;
  const dispatch = useDispatch();
  const currentPrice = 15000;
  const onChangeAmount = (e) => {
    dispatch(changeAmount(e.target.value));
  };
  const onChangeTotal = () => {};
  return (
    <>
      <p className={styles.title}>{title}</p>
      <div className={styles.itemContainer}>
        <p>{title}가격</p>
        <input type="text" value={currentPrice.toLocaleString("ko-KR")} />
      </div>
      <div className={styles.itemContainer}>
        <p>주문수량</p>
        <input type="number" onChange={onChangeAmount} />
      </div>
      <div className={styles.itemContainer}>
        <p>주문총액</p>
        <input
          type="text"
          value={clickedTotal.toLocaleString("ko-KR")}
          onChange={onChangeTotal}
        />
        <MainPerBtn />
      </div>
      <div className={styles.itemContainer}>
        <MainBtn title={title} />
      </div>
    </>
  );
};

export default MainAct;
