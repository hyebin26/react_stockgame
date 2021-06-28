import React from "react";
import MainChart from "../../components/main_chart/mainChart";
import { useEffect } from "react/cjs/react.development";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../../service/chart_data";
import { changeCurrentChart } from "../../modules/main";

const MainChartContainer = (props) => {
  const { chartStock } = useSelector((state) => state.main);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeCurrentChart());
  }, [dispatch]);

  return <MainChart data={chartStock} options={options} />;
};

export default MainChartContainer;
