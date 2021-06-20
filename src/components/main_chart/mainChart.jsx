import React from "react";
import styles from "./mainChart.module.css";
import { Line } from "react-chartjs-2";

const MainChart = ({ options, data }) => {
  return (
    <div className={styles.container}>
      <Line width={100} height={100} data={data} options={options} />
    </div>
  );
};

export default MainChart;
