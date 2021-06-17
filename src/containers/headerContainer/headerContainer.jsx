import React from "react";
import Header from "../../components/header/header";
import { useDispatch, useSelector } from "react-redux";
import { clickNextDay, changeCurrentChart } from "../../modules/main";

const HeaderContainer = (props) => {
  const dispatch = useDispatch();
  const { day } = useSelector((state) => state.main);
  const onClickNextBtn = () => {
    dispatch(clickNextDay());
    dispatch(changeCurrentChart());
  };

  return <Header day={day} onClickNextBtn={onClickNextBtn} />;
};

export default HeaderContainer;
