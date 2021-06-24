import React from "react";
import MainPerBtn from "../../components/main_perBtn/mainPerBtn";
import { useDispatch } from "react-redux";
import { clickBuyPerBtn, clickPerSellBtn } from "../../modules/main";

const MainPerBtnContainer = ({ title }) => {
  const dispatch = useDispatch();
  const onClickPerBuyBtn = (e) => {
    const btnVal = e.target.innerText;
    const regex = /[^0-9]/g;
    const result = btnVal.replace(regex, "");
    dispatch(clickBuyPerBtn(result));
  };
  const onClickPerSellBtn = (e) => {
    const btnVal = e.target.innerText;
    const regex = /[^0-9]/g;
    const result = btnVal.replace(regex, "");
    dispatch(clickPerSellBtn(result));
  };

  return (
    <MainPerBtn
      title={title}
      onClickPerBuyBtn={onClickPerBuyBtn}
      onClickPerSellBtn={onClickPerSellBtn}
    />
  );
};

export default MainPerBtnContainer;
