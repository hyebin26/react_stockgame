import React from "react";
import Header from "../../components/header/header";
import { useDispatch, useSelector } from "react-redux";
import {
  clickNextDay,
  changeCurrentChart,
  changeCurrentHasStocks,
  clickResetBtn,
} from "../../modules/main";
import swal from "sweetalert";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";

const HeaderContainer = ({ database }) => {
  const dispatch = useDispatch();
  const {
    day,
    hasMoney,
    stocks,
    haveStocks,
    spendMoney,
    haveHints,
    hintPoint,
  } = useSelector((state) => state.main);
  const onClickNextBtn = useCallback(() => {
    swal({ text: "다음 날로 넘어가겠습니까?", buttons: true }).then((agree) => {
      if (agree) {
        dispatch(clickNextDay());
        dispatch(changeCurrentChart());
        dispatch(changeCurrentHasStocks());
      }
    });
  }, [dispatch]);
  const onResetBtn = useCallback(() => {
    swal({ text: "초기화를 하시겠습니까?", buttons: true }).then((agree) => {
      if (agree) {
        database.deleteData(localStorage.getItem("token"));
        dispatch(clickResetBtn());
      }
    });
  }, [database, dispatch]);
  const [toggle, setToggle] = useState(true);
  const onClickHambuger = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    database.saveUserData(localStorage.getItem("token"), {
      day,
      hasMoney,
      spendMoney,
      haveStocks: haveStocks.length === 0 ? [0] : haveStocks,
    });
  }, [haveStocks, hasMoney, day, spendMoney, database]);
  useEffect(() => {
    database.saveStockData(localStorage.getItem("token"), stocks);
  }, [stocks, database]);

  useEffect(() => {
    database.saveHintData(localStorage.getItem("token"), {
      haveHints,
      hintPoint,
    });
  }, [haveHints, hintPoint, database]);
  return (
    <Header
      day={day}
      onClickNextBtn={onClickNextBtn}
      onResetBtn={onResetBtn}
      onClickHambuger={onClickHambuger}
      toggle={toggle}
    />
  );
};

export default HeaderContainer;
