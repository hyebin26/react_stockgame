import React from "react";
import MainStockItemList from "../main_stockItemList/mainStockItemList";
import styles from "./mainStockItem.module.css";

const data = [
  { name: "H전자", price: [8000] },
  { name: "C엔터", price: [4000] },
  { name: "K반도체", price: [15000] },
];

const StockItem = (props) => {
  return (
    <ul className={styles.container}>
      {data.map((item) => (
        <MainStockItemList name={item.name} price={item.price} />
      ))}
    </ul>
  );
};

export default StockItem;
