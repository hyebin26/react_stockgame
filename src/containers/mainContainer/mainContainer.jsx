import React, { useEffect } from "react";
import Main from "../../components/main/main";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { onLoadData } from "../../modules/main";

const MainContainer = ({ database }) => {
  const dispatch = useDispatch();
  const hisotry = useHistory();
  const { isLoading } = useSelector((state) => state.main);

  const updateDefaultData = (data) => {
    dispatch(onLoadData(data));
  };
  const updateData = (data) => {
    if (data === null) {
      database.loadData("default", updateDefaultData);
    } else {
      dispatch(onLoadData(data));
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) hisotry.replace("/");
  }, [localStorage.getItem("token")]);

  useEffect(() => {
    database.loadData(localStorage.getItem("token"), updateData);
  }, []);

  return <Main isLoading={isLoading} database={database} />;
};

export default MainContainer;
