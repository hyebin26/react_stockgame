import React from "react";
import Header from "../header/header";
import MainChart from "../main_chart/mainChart";
import MainTrading from "../main_trading/mainTrading";
import styles from "./main.module.css";
import { useEffect } from "react/cjs/react.development";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { onLoadData } from "../../modules/main";
import MainStockItemContainer from "../../containers/main_stockItemContainer/mainStockItemContainer";

const Main = ({ database }) => {
  const hisotry = useHistory();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.main);

  const updateDefaultData = (data) => dispatch(onLoadData(data));
  const updateData = (data) => {
    if (data === null) {
      database.loadData("default", updateDefaultData);
    } else {
      dispatch(onLoadData(data));
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) hisotry.replace("/");
  }, [localStorage.getItem("token")]);

  useEffect(() => {
    database.saveUserData("default", {
      hasMoney: 100000000,
      haveStocks: [],
      day: 1,
    });
    database.loadData(localStorage.getItem("token"), updateData);
  }, []);

  if (isLoading === true)
    return (
      <section className={styles.loadingContainer}>
        <div className={styles.loading}></div>
      </section>
    );
  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.mainTrading}>
        <div className={styles.trading_container}>
          <MainChart />
          <MainTrading database={database} />
        </div>
      </section>
      <section className={styles.mainItemContainer}>
        <MainStockItemContainer />
      </section>
    </div>
  );
};

export default Main;
