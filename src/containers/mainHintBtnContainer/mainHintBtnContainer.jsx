import React from "react";
import { useDispatch } from "react-redux";
import MainHintBtn from "../../components/main_hintBtn/mainHintBtn";
import { clickHintBtn } from "../../modules/main";

const MainHintBtnContainer = ({ point }) => {
  const dispatch = useDispatch();
  const onClickHintBtn = () => {
    dispatch(clickHintBtn());
  };
  return <MainHintBtn point={point} onClickHintBtn={onClickHintBtn} />;
};

export default MainHintBtnContainer;
