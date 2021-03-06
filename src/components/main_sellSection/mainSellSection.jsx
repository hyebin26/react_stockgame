import React from "react";
import MainBtnContainer from "../../containers/mainBtnCotaniner/mainBtnContainer";
import MainPerBtnContainer from "../../containers/mainPerBtnContainer/mainPerBtnContainer";
import styles from "./mainSellSection.module.css";

const MainSellSection = ({
  clickedStockPrice,
  sellClickedAmount,
  sellClickedTotal,
  onChangeAmount,
}) => {
  return (
    <>
      <p className={styles.title}>매도</p>
      <div className={styles.itemContainer}>
        <p>매도가격</p>
        <input
          type="text"
          value={clickedStockPrice.toLocaleString("ko-KR")}
          readOnly
        />
      </div>
      <div className={styles.itemContainer}>
        <p>주문수량</p>
        <input
          type="number"
          min="0"
          value={sellClickedAmount}
          onChange={onChangeAmount}
        />
      </div>
      <div className={styles.itemContainer}>
        <p>주문총액</p>
        <input
          type="text"
          value={sellClickedTotal.toLocaleString("ko-KR")}
          readOnly
        />
        <MainPerBtnContainer title="매도" />
      </div>
      <div className={styles.itemContainer}>
        <MainBtnContainer title="매도" />
      </div>
    </>
  );
};

export default MainSellSection;
