import React from "react";
import MainBtn from "../main_btn/mainBtn";
import MainPerBtn from "../main_perBtn/mainPerBtn";
import styles from "./mainSellSection.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeAmount } from "../../modules/buy";
import { changeSellAmount } from "../../modules/sell";

const MainSellSection = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.sell);
  const { clickedStockPrice, clickedAmount, clickedTotal } = useSelector(
    (state) => state.sell
  );

  const onChangeAmount = (e) => {
    dispatch(changeSellAmount(e.target.value));
  };
  const onChangeTotal = (e) => {};
  return (
    <>
      <p className={styles.title}>매도</p>
      <div className={styles.itemContainer}>
        <p>매도가격</p>
        <input type="text" value={clickedStockPrice.toLocaleString("ko-KR")} />
      </div>
      <div className={styles.itemContainer}>
        <p>주문수량</p>
        <input
          type="number"
          min="0"
          value={clickedAmount}
          onChange={onChangeAmount}
        />
      </div>
      <div className={styles.itemContainer}>
        <p>주문총액</p>
        <input type="text" value={clickedTotal} onChange={onChangeTotal} />
        <MainPerBtn title="매도" />
      </div>
      <div className={styles.itemContainer}>
        <MainBtn title="매도" />
      </div>
    </>
  );
};

export default MainSellSection;
