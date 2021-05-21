import React from "react";
import styles from "./mainPerBtn.module.css";
import { users } from "../../modules/object";
import { useState } from "react/cjs/react.development";
import { useDispatch, useSelector } from "react-redux";
import { clickBuyPerBtn } from "../../modules/buy";
import { clickPerSellBtn } from "../../modules/sell";

const MainPerBtn = ({ title }) => {
  const dispatch = useDispatch();
  const onClickBuyBtn = (e) => {
    const btnVal = e.target.innerText;
    const regex = /[^0-9]/g;
    const result = btnVal.replace(regex, "");
    dispatch(clickBuyPerBtn(result));
  };
  const onClickSellBtn = (e) => {
    const btnVal = e.target.innerText;
    const regex = /[^0-9]/g;
    const result = btnVal.replace(regex, "");
    dispatch(clickPerSellBtn(result));
  };

  return (
    <div className={styles.container}>
      <button onClick={title ? onClickSellBtn : onClickBuyBtn}>0%</button>
      <button onClick={title ? onClickSellBtn : onClickBuyBtn}>25%</button>
      <button onClick={title ? onClickSellBtn : onClickBuyBtn}>50%</button>
      <button onClick={title ? onClickSellBtn : onClickBuyBtn}>75%</button>
      <button onClick={title ? onClickSellBtn : onClickBuyBtn}>100%</button>
    </div>
  );
};

export default MainPerBtn;
