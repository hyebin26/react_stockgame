import React from "react";
import MainBtn from "../main_btn/mainBtn";
import MainPerBtn from "../main_perBtn/mainPerBtn";
import styles from "./mainBuySection.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeAmount } from "../../modules/buy";

const MainBuySection = (props) => {
  const clickedTotal = useSelector((state) => state.buy.clickedTotal);
  const clickedAmount = useSelector((state) => state.buy.clickedAmount);
  const dispatch = useDispatch();
  const currentPrice = 15000;
  const onChangeAmount = (e) => {
    dispatch(changeAmount(e.target.value));
  };
  return (
    <>
      <p className={styles.title}>매수</p>
      <div className={styles.itemContainer}>
        <p>매수가격</p>
        <input type="text" value={currentPrice.toLocaleString("ko-KR")} />
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
        <input type="text" value={clickedTotal.toLocaleString("ko-KR")} />
        <MainPerBtn />
      </div>
      <div className={styles.itemContainer}>
        <MainBtn title="매수" />
      </div>
    </>
  );
};

export default MainBuySection;
