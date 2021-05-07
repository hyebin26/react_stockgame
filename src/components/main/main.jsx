import React from "react";
import Header from "../header/header";
import MainChart from "../main_chart/mainChart";
import MainContents from "../main_contents/mainContents";
import styles from "./main.module.css";

const Main = (props) => {
  return (
    <>
      <Header />
      <section className={styles.main}>
        <div className={styles.container}>
          <MainChart />
          <MainContents />
        </div>
      </section>
    </>
  );
};

export default Main;
