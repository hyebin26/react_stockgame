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
    maintainAspectRatio: false,
    datasets: {
      doughnut: {
        borderColor: "rgb(242 242 242 / 68%)",
      },
    },
    events: [],
    plugins: {
      legend: {
        position: "left",
        title: {
          display: true,
          text: "보유 주식",
          color: "white",
        },
        labels: {
          padding: 20,
          color: "white",
        },
      },
    },
  };
  return (
    <div className={styles.container}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ProfilePieChart;
