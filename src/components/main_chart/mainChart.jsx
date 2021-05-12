import React, { useEffect } from "react";
import styles from "./mainChart.module.css";
import { Line } from "react-chartjs-2";
import { useState } from "react/cjs/react.development";
import { data, options } from "../../service/chartJs";

const MainChart = (props) => {
  const [data, setData] = useState({
    labels: ["1day", "2day", "3day", "4day", "5day", "6day", "7day", "8day"],
    datasets: [
      {
        label: "H전자",
        data: [6500, 5900, 8000, 8100, 5000, 3000],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgb(75, 192, 192)",
        tension: 0,
      },
    ],
  });
  const handleAddBtn = () => {
    setData((state) => ({
      ...state,
      datasets: [
        {
          ...state.datasets[0],
          data: state.datasets[0].data.concat(8000),
        },
      ],
    }));
  };

  return (
    <div className={styles.container}>
      <Line height={100} width={100} data={data} options={options} />
    </div>
  );
};

export default MainChart;
