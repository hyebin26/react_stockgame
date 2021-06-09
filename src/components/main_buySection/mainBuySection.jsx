import React from "react";
import MainPerBtn from "../main_perBtn/mainPerBtn";
import styles from "./mainBuySection.module.css";
import MainBtnContainer from "../../containers/main_btnCotaniner/mainBtnContainer";

const MainBuySection = ({ database }) => {
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
        <MainBtnContainer title="매수" database={database} />
      </div>
    </>
  );
};

export default MainBuySection;
