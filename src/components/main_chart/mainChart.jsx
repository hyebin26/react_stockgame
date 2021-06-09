import React from "react";
import styles from "./mainChart.module.css";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react/cjs/react.development";
import { options } from "../../service/chart_data";
import { useSelector } from "react-redux";

const MainChart = (props) => {
  const stock = useSelector((state) => state.main.chartStock);
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
  useEffect(() => {
    console.log(stock);
    setData(stock);
  }, [stock]);
  return (
    <div className={styles.container}>
      <Line height={100} width={100} data={data} options={options} />
    </div>
  );
};

export default MainChart;
