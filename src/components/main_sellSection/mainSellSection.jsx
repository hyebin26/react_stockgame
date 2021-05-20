import React from "react";
import MainBtn from "../main_btn/mainBtn";
import MainPerBtn from "../main_perBtn/mainPerBtn";
import styles from "./mainSellSection.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeAmount } from "../../modules/buy";

const MainSellSection = (props) => {
  return (
    <>
      <p className={styles.title}>매도</p>
      <div className={styles.itemContainer}>
        <p>매도가격</p>
        <input type="text" value="15000" />
      </div>
      <div className={styles.itemContainer}>
        <p>주문수량</p>
        <input type="number" min="0" />
      </div>
      <div className={styles.itemContainer}>
        <p>주문총액</p>
        <input type="text" />
        <MainPerBtn />
      </div>
      <div className={styles.itemContainer}>
        <MainBtn title="매도" />
      </div>
    </>
  );
};

export default MainSellSection;
