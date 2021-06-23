import React from "react";
import { useSelector } from "react-redux";
import ProfileTextStock from "../../components/profile_textStock/profileTextStock";

const ProfileTextStockContainer = (props) => {
  const { hasMoney, spendMoney, haveStocks } = useSelector(
    (state) => state.main
  );
  let buying = 0;
  let currentBuyingPrice = 0;
  spendMoney.map((item) => {
    if (typeof item.price === "number") buying += item.price;
  });
  haveStocks.map((item) => {
    if (typeof item.price === "number")
      currentBuyingPrice += item.price * item.amount;
  });
  let total = currentBuyingPrice - buying;
  let totalPer = (total / 100).toFixed(1) * 100;
  return (
    <ProfileTextStock
      currentBuyingPrice={currentBuyingPrice}
      total={total}
      totalPer={totalPer}
    />
  );
};

export default ProfileTextStockContainer;
