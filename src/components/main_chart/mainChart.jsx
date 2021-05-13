import React, { useEffect } from "react";
import styles from "./mainChart.module.css";
import { Line } from "react-chartjs-2";
import { useState } from "react/cjs/react.development";
import { stock, options } from "../../service/chart_data";

const MainChart = (props) => {
  const [data, setData] = useState(stock);
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
