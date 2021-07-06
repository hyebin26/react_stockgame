import React from "react";
import Hint from "../../components/hint/hint";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onLoadData } from "../../modules/main";
import { useHistory } from "react-router-dom";

const HintContainer = ({ database }) => {
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
  return <Hint database={database} isLoading={isLoading} />;
};

export default HintContainer;
