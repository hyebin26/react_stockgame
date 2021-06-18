import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainBtn from "../../components/main_btn/mainBtn";
import { clickBuyBtn, clickSellBtn } from "../../modules/main";
import swal from "sweetalert";

const MainBtnContainer = (props) => {
  const {
    clickedAmount,
    day,
    hasMoney,
    haveStocks,
    sellClickedAmount,
    stocks,
  } = useSelector((state) => state.main);
  const dispatch = useDispatch();

  const onClickBuyBtn = () => {
    if (clickedAmount === 0)
      return swal({ title: "갯수를 설정해주세요!", icon: "warning" });
    dispatch(clickBuyBtn());
  };

  const onClickSellBtn = () => {
    alert("test");
    if (sellClickedAmount === 0) {
      return swal({ title: "갯수를 설정해주세요!", icon: "warning" });
    } else {
      dispatch(clickSellBtn());
    }
  };

  useEffect(() => {
    props.database.saveUserData(localStorage.getItem("token"), {
      day,
      hasMoney,
      haveStocks: haveStocks.length === 0 ? [0] : haveStocks,
    });
  }, [haveStocks, hasMoney, day]);
  useEffect(() => {
    props.database.saveStockData(localStorage.getItem("token"), stocks);
  }, [stocks]);

  return (
    <MainBtn
      title={props.title}
      onClickBuyBtn={onClickBuyBtn}
      onClickSellBtn={onClickSellBtn}
    />
  );
};

export default MainBtnContainer;
