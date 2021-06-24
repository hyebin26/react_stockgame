import React from "react";
import Profile from "../../components/profile/profile";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onLoadData } from "../../modules/main";

const ProfileContainer = ({ database }) => {
  const dispatch = useDispatch();
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
    database.loadData(localStorage.getItem("token"), updateData);
  }, []);
  return <Profile database={database} isLoading={isLoading} />;
};

export default ProfileContainer;
