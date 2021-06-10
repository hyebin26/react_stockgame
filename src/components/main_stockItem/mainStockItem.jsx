import React from "react";
import styles from "./mainStockItem.module.css";
import MainStockItemList from "../main_stockItemList/mainStockItemList";
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

const MainStockItem = ({ stocks, onClickLabel }) => {
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
  return (
    <ul className={styles.container}>
      {stocks.map((item, index) => (
        <MainStockItemList
          label={item.label}
          price={item.price}
          icon={icons[index]}
          key={index}
          onClickLabel={onClickLabel}
        />
      ))}
    </ul>
  );
};

export default MainStockItem;
