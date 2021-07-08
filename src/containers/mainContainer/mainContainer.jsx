import React, { useEffect } from "react";
import Main from "../../components/main/main";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { onLoadData } from "../../modules/main";

const MainContainer = ({ database }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoading } = useSelector((state) => state.main);

  useEffect(() => {
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
    database.loadData(localStorage.getItem("token"), updateData);
  }, [database, dispatch]);

  useEffect(() => {
    if (!localStorage.getItem("token")) history.push("/");
  }, [history]);

  return <Main isLoading={isLoading} database={database} />;
};

export default MainContainer;
