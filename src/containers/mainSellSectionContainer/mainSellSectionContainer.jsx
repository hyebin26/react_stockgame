import React from "react";
import MainSellSection from "../../components/main_sellSection/mainSellSection";
import { useDispatch, useSelector } from "react-redux";
import { changeSellAmount } from "../../modules/main";

const MainSellSectionContainer = ({ database }) => {
  const dispatch = useDispatch();
  const { clickedStockPrice, sellClickedAmount, sellClickedTotal } =
    useSelector((state) => state.main);

  const onChangeAmount = (e) => {
    dispatch(changeSellAmount(e.target.value));
  };
  const onChangeTotal = (e) => {};
  return (
    <MainSellSection
      clickedStockPrice={clickedStockPrice}
      sellClickedAmount={sellClickedAmount}
      sellClickedTotal={sellClickedTotal}
      onChangeAmount={onChangeAmount}
      onChangeTotal={onChangeTotal}
      database={database}
    />
  );
};
export default MainSellSectionContainer;
