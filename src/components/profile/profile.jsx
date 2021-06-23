import React from "react";
import HeaderContainer from "../../containers/headerContainer/headerContainer";
import ProfileText from "../profile_text/profileText";
import styles from "./profile.module.css";
import ProfilePieChart from "../profile_pieChart/profilePieChart";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onLoadData } from "../../modules/main";

const Profile = ({ database }) => {
  const dispatch = useDispatch();
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
  return (
    <div className={styles.container}>
      <HeaderContainer database={database} />
      <section className={styles.myProfileContainer}>
        <div className={styles.myProfileBox}>
          <ProfileText />
          <ProfilePieChart />
        </div>
      </section>
      <section className={styles.itemContainer}>
        <div>ee</div>
      </section>
    </div>
  );
};

export default Profile;
