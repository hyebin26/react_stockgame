import React from "react";
import MainBuySection from "../../components/main_buySection/mainBuySection";
import { useDispatch, useSelector } from "react-redux";
import { changeAmount } from "../../modules/main";

const MainBuySectionContainer = () => {
  const clickedTotal = useSelector((state) => state.main.clickedTotal);
  const clickedAmount = useSelector((state) => state.main.clickedAmount);
  const clickedStockPrice = useSelector(
    (state) => state.main.clickedStockPrice
  );
  const dispatch = useDispatch();

  const onChangeAmount = (e) => {
    dispatch(changeAmount(e.target.value));
  };
  const onChangeTotal = () => {};
  return (
    <MainBuySection
      onChangeTotal={onChangeTotal}
      onChangeAmount={onChangeAmount}
      clickedTotal={clickedTotal}
      clickedAmount={clickedAmount}
      clickedStockPrice={clickedStockPrice}
    />
  );
};

export default MainBuySectionContainer;
