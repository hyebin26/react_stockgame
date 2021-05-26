import React from "react";
import styles from "./mainPerBtn.module.css";
import { useDispatch } from "react-redux";
import { clickBuyPerBtn, clickPerSellBtn } from "../../modules/main";

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
      <button onClick={title === "매도" ? onClickSellBtn : onClickBuyBtn}>
        0%
      </button>
      <button onClick={title === "매도" ? onClickSellBtn : onClickBuyBtn}>
        25%
      </button>
      <button onClick={title === "매도" ? onClickSellBtn : onClickBuyBtn}>
        50%
      </button>
      <button onClick={title === "매도" ? onClickSellBtn : onClickBuyBtn}>
        75%
      </button>
      <button onClick={title === "매도" ? onClickSellBtn : onClickBuyBtn}>
        100%
      </button>
    </div>
  );
};

export default MainPerBtn;
