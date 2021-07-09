import React from "react";
import styles from "./mainStockItem.module.css";
import MainStockItemList from "../main_stockItemList/mainStockItemList";

const MainStockItem = ({ stocks, onClickLabel, day, icons }) => {
  return (
    <ul className={styles.container}>
      {stocks.map((item, index) => (
        <MainStockItemList
          label={item.label}
          price={item.price}
          icon={icons[index]}
          key={index}
          onClickLabel={onClickLabel}
          day={day}
        />
      ))}
    </ul>
  );
};

export default MainStockItem;
