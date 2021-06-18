import React from "react";
import Header from "../../components/header/header";
import { useDispatch, useSelector } from "react-redux";
import {
  clickNextDay,
  changeCurrentChart,
  changeCurrentHasStocks,
} from "../../modules/main";
import swal from "sweetalert";

const HeaderContainer = ({ database }) => {
  const dispatch = useDispatch();
  const { day } = useSelector((state) => state.main);
  const onClickNextBtn = () => {
    swal({ text: "다음 날로 넘어가겠습니까?", buttons: true }).then((agree) => {
      if (agree) {
        dispatch(clickNextDay());
        dispatch(changeCurrentChart());
        dispatch(changeCurrentHasStocks());
      }
    });
  };
  const onResetBtn = () => {
    swal({ text: "초기화를 하시겠습니까?", buttons: true }).then((agree) => {
      if (agree) {
        database.deleteData(localStorage.getItem("token"));
      }
    });
  };

  return (
    <Header day={day} onClickNextBtn={onClickNextBtn} onResetBtn={onResetBtn} />
  );
};

export default HeaderContainer;
