import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MainBtn from "../../components/main_btn/mainBtn";
import { clickBuyBtn, clickSellBtn } from "../../modules/main";
import swal from "sweetalert";
import { memo } from "react";

const MainBtnContainer = (props) => {
  const { clickedAmount, sellClickedAmount, clickedLebel } = useSelector(
    (state) => state.main
  );
  const dispatch = useDispatch();

  const onClickBuyBtn = () => {
    swal({
      buttons: true,
      text: `${clickedLebel} ${clickedAmount}개를 구매하시겠습니까?`,
    }).then((agree) => {
      if (agree) {
        if (clickedAmount === 0) {
          return swal({ title: "갯수를 설정해주세요!", icon: "warning" });
        } else {
          dispatch(clickBuyBtn());
        }
      }
    });
  };

  const onClickSellBtn = () => {
    swal({
      buttons: true,
      text: `${clickedLebel} ${sellClickedAmount}개를 판매하시겠습니까?`,
    }).then((agree) => {
      if (agree) {
        if (sellClickedAmount === 0) {
          return swal({ title: "갯수를 설정해주세요!", icon: "warning" });
        } else {
          dispatch(clickSellBtn());
        }
      }
    });
  };

  return (
    <MainBtn
      title={props.title}
      onClickBuyBtn={onClickBuyBtn}
      onClickSellBtn={onClickSellBtn}
    />
  );
};

export default MainBtnContainer;
