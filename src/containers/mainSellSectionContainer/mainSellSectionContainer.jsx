import React from "react";
import MainSellSection from "../../components/main_sellSection/mainSellSection";
import { useDispatch, useSelector } from "react-redux";
import { changeSellAmount } from "../../modules/main";
import { memo } from "react";

const MainSellSectionContainer = memo(() => {
  const dispatch = useDispatch();
  const sellClickedTotal = useSelector((state) => state.main.sellClickedTotal);
  const sellClickedAmount = useSelector(
    (state) => state.main.sellClickedAmount
  );
  const clickedStockPrice = useSelector(
    (state) => state.main.clickedStockPrice
  );
  const onChangeAmount = (e) => {
    dispatch(changeSellAmount(e.target.value));
  };
  return (
    <MainSellSection
      clickedStockPrice={clickedStockPrice}
      sellClickedAmount={sellClickedAmount}
      sellClickedTotal={sellClickedTotal}
      onChangeAmount={onChangeAmount}
    />
  );
});
export default MainSellSectionContainer;
