import React from "react";
import MainPerBtn from "../../components/main_perBtn/mainPerBtn";
import { useDispatch } from "react-redux";
import { clickBuyPerBtn, clickPerSellBtn } from "../../modules/main";
import { memo } from "react";
import { useCallback } from "react";

const MainPerBtnContainer = memo(({ title }) => {
  const dispatch = useDispatch();
  const onClickPerBuyBtn = useCallback(
    (e) => {
      const btnVal = e.target.innerText;
      const regex = /[^0-9]/g;
      const result = btnVal.replace(regex, "");
      dispatch(clickBuyPerBtn(result));
    },
    [dispatch]
  );
  const onClickPerSellBtn = useCallback(
    (e) => {
      const btnVal = e.target.innerText;
      const regex = /[^0-9]/g;
      const result = btnVal.replace(regex, "");
      dispatch(clickPerSellBtn(result));
    },
    [dispatch]
  );

  return (
    <MainPerBtn
      title={title}
      onClickPerBuyBtn={onClickPerBuyBtn}
      onClickPerSellBtn={onClickPerSellBtn}
    />
  );
});

export default MainPerBtnContainer;
