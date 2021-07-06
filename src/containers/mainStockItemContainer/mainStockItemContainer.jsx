import React from "react";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainStockItem from "../../components/main_stockItem/mainStockItem";
import { clickLabel } from "../../modules/main";

const MainStockItemContainer = (props) => {
  const { stocks, day } = useSelector((state) => state.main);
  const dispatch = useDispatch();
  const onClickLabel = (target) => {
    dispatch(clickLabel(target));
  };
  return (
    <MainStockItem stocks={stocks} day={day} onClickLabel={onClickLabel} />
  );
};

export default MainStockItemContainer;
