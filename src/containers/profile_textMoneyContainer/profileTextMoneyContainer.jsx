import React from "react";
import { useSelector } from "react-redux";
import ProfileTextMoney from "../../components/profile_textMoney/profileTextMoney";

const ProfileTextMoneyContainer = (props) => {
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
  return (
    <ProfileTextMoney
      hasMoney={hasMoney}
      buying={buying}
      currentBuyingPrice={currentBuyingPrice}
    />
  );
};

export default ProfileTextMoneyContainer;
