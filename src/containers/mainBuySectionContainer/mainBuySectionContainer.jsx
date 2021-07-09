import React from "react";
import MainBuySection from "../../components/main_buySection/mainBuySection";
import { useDispatch, useSelector } from "react-redux";
import { changeAmount } from "../../modules/main";
import { memo } from "react";

const MainBuySectionContainer = memo(() => {
  const dispatch = useDispatch();
  const clickedTotal = useSelector((state) => state.main.clickedTotal);
  const clickedAmount = useSelector((state) => state.main.clickedAmount);
  const clickedStockPrice = useSelector(
    (state) => state.main.clickedStockPrice
  );

  const onChangeAmount = (e) => {
    dispatch(changeAmount(e.target.value));
  };
  return (
    <MainBuySection
      onChangeAmount={onChangeAmount}
      clickedTotal={clickedTotal}
      clickedAmount={clickedAmount}
      clickedStockPrice={clickedStockPrice}
    />
  );
});

export default MainBuySectionContainer;
