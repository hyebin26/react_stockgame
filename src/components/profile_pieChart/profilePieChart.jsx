import React from "react";
import styles from "./profilePieChart.module.css";
import { Doughnut, Pie } from "react-chartjs-2";

const ProfilePieChart = (props) => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const options = {
    aspectRatio: 1,
  };
  return (
    <div className={styles.container}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ProfilePieChart;
