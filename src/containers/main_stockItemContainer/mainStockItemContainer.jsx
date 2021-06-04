import React from "react";
import { useSelector } from "react-redux";
import MainStockItem from "../../components/main_stockItem/mainStockItem";

const MainStockItemContainer = (props) => {
  const { stocks } = useSelector((state) => state.main);
  return <MainStockItem stocks={stocks} />;
};

export default MainStockItemContainer;
