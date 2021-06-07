import React from "react";
import MainBtn from "../main_btn/mainBtn";
import MainPerBtn from "../main_perBtn/mainPerBtn";
import styles from "./mainBuySection.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeAmount } from "../../modules/main";
import { useEffect } from "react/cjs/react.development";

const MainBuySection = ({ database }) => {
  const clickedTotal = useSelector((state) => state.main.clickedTotal);
  const clickedAmount = useSelector((state) => state.main.clickedAmount);
  const clickedStockPrice = useSelector(
    (state) => state.main.clickedStockPrice
  );
  const state = useSelector((state) => state.main);

  const dispatch = useDispatch();
  const onChangeAmount = (e) => {
    dispatch(changeAmount(e.target.value));
  };
  const onChangeTotal = () => {};

  return (
    <>
      <p className={styles.title}>매수</p>
      <div className={styles.itemContainer}>
        <p>매수가격</p>
        <input type="text" value={clickedStockPrice.toLocaleString("ko-KR")} />
      </div>
      <div className={styles.itemContainer}>
        <p>주문수량</p>
        <input
          type="number"
          value={clickedAmount}
          onChange={onChangeAmount}
          min="0"
        />
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
        <MainBtn title="매수" database={database} />
      </div>
    </>
  );
};

export default MainBuySection;
