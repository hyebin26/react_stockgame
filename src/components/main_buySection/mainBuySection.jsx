import React from "react";
import styles from "./mainBuySection.module.css";
import MainBtnContainer from "../../containers/mainBtnCotaniner/mainBtnContainer";
import MainPerBtnContainer from "../../containers/mainPerBtnContainer/mainPerBtnContainer";

const MainBuySection = ({
  onChangeTotal,
  onChangeAmount,
  clickedTotal,
  clickedAmount,
  clickedStockPrice,
}) => {
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
        <MainPerBtnContainer />
      </div>
      <div className={styles.itemContainer}>
        <MainBtnContainer title="매수" />
      </div>
    </>
  );
};

export default MainBuySection;
