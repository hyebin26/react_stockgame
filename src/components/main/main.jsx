import React from "react";
import Header from "../header/header";
import MainChart from "../main_chart/mainChart";
import MainTrading from "../main_trading/mainTrading";
import styles from "./main.module.css";

const Main = (props) => {
  return (
    <>
      <Header />
      <section className={styles.main}>
        <div className={styles.container}>
          <MainChart />
          <MainTrading />
        </div>
      </section>
    </>
  );
};

export default Main;
