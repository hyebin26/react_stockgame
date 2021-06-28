import React from "react";
import MainSellSection from "../../components/main_sellSection/mainSellSection";
import { useDispatch, useSelector } from "react-redux";
import { changeSellAmount } from "../../modules/main";

const MainSellSectionContainer = () => {
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
    />
  );
};
export default MainSellSectionContainer;
