import React from "react";
import styles from "./profilePieChart.module.css";
import { Doughnut } from "react-chartjs-2";
import { data, options } from "../../service/doughnut";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeDoughnut } from "../../modules/main";

const ProfilePieChart = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeDoughnut());
  }, []);
  const plugins = {
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
        usePointStyle: true,
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
