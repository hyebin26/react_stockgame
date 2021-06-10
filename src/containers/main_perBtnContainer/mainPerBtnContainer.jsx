import React from "react";
import MainPerBtn from "../../components/main_perBtn/mainPerBtn";
import { useDispatch } from "react-redux";
import { clickBuyPerBtn, clickPerSellBtn } from "../../modules/main";

const MainPerBtnContainer = (props) => {
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
    <MainPerBtn
      title="매도"
      onClickSellBtn={onClickSellBtn}
      onClickBuyBtn={onClickBuyBtn}
    />
  );
};

export default MainPerBtnContainer;
