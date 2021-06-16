import React from "react";
import styles from "./mainChart.module.css";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react/cjs/react.development";
import { options } from "../../service/chart_data";
import { useDispatch, useSelector } from "react-redux";
import { changeChartData } from "../../modules/main";

const MainChart = (props) => {
  const { chartStock, day } = useSelector((state) => state.main);
  const [data, setData] = useState(chartStock);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(changeChartData(day));
    setData(chartStock);
  }, [day]);
  return (
    <div className={styles.container}>
      <Line height={100} width={100} data={data} options={options} />
    </div>
  );
};

export default MainChart;
