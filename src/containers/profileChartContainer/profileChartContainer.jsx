import React from "react";
import ProfileChart from "../../components/profile_chart/profileChart";
import { options } from "../../service/doughnut";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeDoughnut } from "../../modules/main";

const ProfileChartContainer = (props) => {
  const dispatch = useDispatch();
  const { isDoughnutLoading, doughnutData } = useSelector(
    (state) => state.main
  );
  useEffect(() => {
    dispatch(changeDoughnut());
  }, [dispatch]);

  return (
    <ProfileChart
      data={doughnutData}
      options={options}
      isDoughnutLoading={isDoughnutLoading}
    />
  );
};

export default ProfileChartContainer;
