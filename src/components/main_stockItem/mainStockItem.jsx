import React, { useState } from "react";
import MainStockItemList from "../main_stockItemList/mainStockItemList";
import styles from "./mainStockItem.module.css";
import { stocks } from "../../modules/object";

const StockItem = (props) => {
  const [currentStocks, setCurrentStocks] = useState(stocks);
  return (
    <ul className={styles.container}>
      {currentStocks.map((item) => (
        <MainStockItemList
          label={item.label}
          price={item.price}
          icon={item.icon}
        />
      ))}
    </ul>
  );
};

export default StockItem;
