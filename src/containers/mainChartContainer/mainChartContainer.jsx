import React from "react";
import MainChart from "../../components/main_chart/mainChart";
import { useEffect, useState } from "react/cjs/react.development";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../../service/chart_data";
import { changeCurrentChart } from "../../modules/main";

const MainChartContainer = (props) => {
  const { chartStock } = useSelector((state) => state.main);
  const [data, setData] = useState(chartStock);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeCurrentChart());
  }, []);
  useEffect(() => {
    setData(chartStock);
  }, [chartStock]);

  return <MainChart data={data} options={options} />;
};

export default MainChartContainer;
