import React from "react";
import styles from "./profileChart.module.css";
import { Doughnut } from "react-chartjs-2";

const ProfileChart = ({ data, options, isDoughnutLoading }) => {
  if (!isDoughnutLoading) {
    return (
      <div className={styles.loadingContainer}>
        <p className={styles.loadingText}>보유 주식이 없습니다.</p>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ProfileChart;
