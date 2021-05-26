import React from "react";
import styles from "./mainChart.module.css";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react/cjs/react.development";
import { options } from "../../service/chart_data";
import { useSelector } from "react-redux";

const MainChart = (props) => {
  const stock = useSelector((state) => state.item.stock);
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
    setData(stock);
    console.log(stock);
  }, [stock]);
  // import 한 stock의 값이 변경되면 리렌더링되게
  return (
    <div className={styles.container}>
      <Line height={100} width={100} data={data} options={options} />
    </div>
  );
};

export default MainChart;
