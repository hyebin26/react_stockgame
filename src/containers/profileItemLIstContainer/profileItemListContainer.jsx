import React from "react";
import { useSelector } from "react-redux";
import ProfileItemList from "../../components/profile_itemList/profileItemList";

const ProfileItemListContainer = (props) => {
  const { haveStocks, spendMoney, isDoughnutLoading } = useSelector(
    (state) => state.main
  );
  console.log(haveStocks);
  return haveStocks.map((item, index) => {
    if (typeof item === "object") {
      return (
        <ProfileItemList
          label={item.label}
          amount={item.amount}
          crtPrice={item.price}
          price={Math.floor(spendMoney[index].price / item.amount)}
          statement={
            (item.price - spendMoney[index].price / item.amount) * item.amount
          }
          totalPer={(
            ((item.price - spendMoney[index].price / item.amount) /
              (spendMoney[index].price / item.amount)) *
            100
          ).toFixed(2)}
        />
      );
    } else if (haveStocks.length === 1) {
      return <ProfileItemList isDoughnutLoading={isDoughnutLoading} />;
    }
  });
};

export default ProfileItemListContainer;
