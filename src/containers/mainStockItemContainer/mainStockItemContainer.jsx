import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MainStockItem from "../../components/main_stockItem/mainStockItem";
import { clickLabel } from "../../modules/main";
import {
  SiAzurefunctions,
  SiCivicrm,
  SiSpeakerdeck,
  SiCoronarenderer,
  SiBadoo,
  SiEsea,
  SiFDroid,
  SiUntangle,
  SiIcon,
} from "react-icons/si";

const MainStockItemContainer = (props) => {
  const { stocks, day } = useSelector((state) => state.main);
  const dispatch = useDispatch();
  const icons = [
    <SiAzurefunctions />,
    <SiCivicrm />,
    <SiSpeakerdeck />,
    <SiCoronarenderer />,
    <SiBadoo />,
    <SiEsea />,
    <SiFDroid />,
    <SiIcon />,
    <SiUntangle />,
  ];
  const onClickLabel = (target) => {
    dispatch(clickLabel(target));
  };
  return (
    <MainStockItem
      stocks={stocks}
      day={day}
      onClickLabel={onClickLabel}
      icons={icons}
    />
  );
};

export default MainStockItemContainer;
