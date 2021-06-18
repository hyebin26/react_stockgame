import React from "react";
import MainBtnContainer from "../../containers/main_btnCotaniner/mainBtnContainer";
import MainPerBtnContainer from "../../containers/main_perBtnContainer/mainPerBtnContainer";
import MainBtn from "../main_btn/mainBtn";
import MainPerBtn from "../main_perBtn/mainPerBtn";
import styles from "./mainSellSection.module.css";

const MainSellSection = ({
  database,
  clickedStockPrice,
  sellClickedAmount,
  sellClickedTotal,
  onChangeAmount,
  onChangeTotal,
}) => {
  console.log("sell");
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
          value={sellClickedAmount}
          onChange={onChangeAmount}
        />
      </div>
      <div className={styles.itemContainer}>
        <p>주문총액</p>
        <input
          type="text"
          value={sellClickedTotal.toLocaleString("ko-KR")}
          onChange={onChangeTotal}
        />
        <MainPerBtnContainer title="매도" />
      </div>
      <div className={styles.itemContainer}>
        <MainBtnContainer title="매도" database={database} />
      </div>
    </>
  );
};

export default MainSellSection;
