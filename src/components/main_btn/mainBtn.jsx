import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./mainBtn.module.css";
import { clickBuyBtn } from "../../modules/buy";
import swal from "sweetalert";

const MainBtn = (props) => {
  const title = props.title;
  const { clickedAmount } = useSelector((state) => state.buy);
  const dispatch = useDispatch();
  const onClickBuyBtn = () => {
    if (clickedAmount === 0)
      return swal({ title: "갯수를 설정해주세요!", icon: "warning" });
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
