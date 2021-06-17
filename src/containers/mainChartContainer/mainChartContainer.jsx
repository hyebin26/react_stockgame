import React from "react";
import MainChart from "../../components/main_chart/mainChart";
import { useEffect, useState } from "react/cjs/react.development";
import { useSelector } from "react-redux";
import { options } from "../../service/chart_data";

const MainChartContainer = (props) => {
  const { chartStock } = useSelector((state) => state.main);
  const [data, setData] = useState(chartStock);
  useEffect(() => {
    setData(chartStock);
  }, [chartStock]);

  return <MainChart data={data} options={options} />;
};

export default MainChartContainer;
