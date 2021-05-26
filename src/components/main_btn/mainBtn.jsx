import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./mainBtn.module.css";
import { clickBuyBtn, clickSellBtn } from "../../modules/main";
import swal from "sweetalert";

const MainBtn = (props) => {
  const title = props.title;
  const { clickedAmount } = useSelector((state) => state.main);
  const sellClickedAmount = useSelector(
    (state) => state.main.sellClickedAmount
  );
  const dispatch = useDispatch();
  const onClickBuyBtn = () => {
    if (clickedAmount === 0)
      return swal({ title: "갯수를 설정해주세요!", icon: "warning" });
    dispatch(clickBuyBtn());
  };
  const onClickSellBtn = () => {
    if (sellClickedAmount === 0) {
      return swal({ title: "갯수를 설정해주세요!", icon: "warning" });
    }
    dispatch(clickSellBtn());
  };
  if (title === "매수")
    return (
      <button className={styles.buyBtn} onClick={onClickBuyBtn}>
        매수
      </button>
    );

  return (
    <button className={styles.sellBtn} onClick={onClickSellBtn}>
      매도
    </button>
  );
};

export default MainBtn;
