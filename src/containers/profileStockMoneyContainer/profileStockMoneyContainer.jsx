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
  });
  haveStocks.map((item) => {
    if (typeof item.price === "number")
      currentBuyingPrice += item.price * item.amount;
  });
  let asset = hasMoney + currentBuyingPrice;
  let total = currentBuyingPrice - totalBuyingPrice;
  let totalPer = ((total / totalBuyingPrice) * 100).toFixed(1);
  return (
    <>
      <ProfileTextStock asset={asset} total={total} totalPer={totalPer} />
      <ProfileTextMoney
        hasMoney={hasMoney}
        totalBuyingPrice={totalBuyingPrice}
        currentBuyingPrice={currentBuyingPrice}
      />
    </>
  );
};

export default ProfileStockMoneyContainer;