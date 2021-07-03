import React from "react";
import { useSelector } from "react-redux";
import ProfileTextStock from "../../components/profile_textStock/profileTextStock";
import ProfileTextMoney from "../../components/profile_textMoney/profileTextMoney";

const ProfileStockMoneyContainer = (props) => {
  const { hasMoney, spendMoney, haveStocks } = useSelector(
    (state) => state.main
  );
  let totalBuyingPrice = 0;
  let currentBuyingPrice = 0;
  spendMoney.map((item) => {
    if (typeof item.price === "number") totalBuyingPrice += item.price;
    return null;
  });
  haveStocks.map((item) => {
    if (typeof item.price === "number")
      currentBuyingPrice += item.price * item.amount;
    return null;
  });
  let asset = hasMoney + currentBuyingPrice;
  let total = currentBuyingPrice - totalBuyingPrice;
  let totalPer = ((total / totalBuyingPrice) * 100).toFixed(2);
  return (
    <>
      <ProfileTextMoney
        hasMoney={hasMoney}
        totalBuyingPrice={totalBuyingPrice}
        currentBuyingPrice={currentBuyingPrice}
      />
      <ProfileTextStock asset={asset} total={total} totalPer={totalPer} />
    </>
  );
};

export default ProfileStockMoneyContainer;
