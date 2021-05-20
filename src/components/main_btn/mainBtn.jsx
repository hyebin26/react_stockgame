import React from "react";
import { useDispatch } from "react-redux";
import styles from "./mainBtn.module.css";
import { clickBuyBtn } from "../../modules/buy";

const MainBtn = (props) => {
  const title = props.title;
  const dispatch = useDispatch();
  const onClickBuyBtn = () => {
    dispatch(clickBuyBtn());
  };
  if (title === "매수")
    return (
      <button className={styles.buyBtn} onClick={onClickBuyBtn}>
        매수
      </button>
    );

  return <button className={styles.sellBtn}>매도</button>;
};

export default MainBtn;
