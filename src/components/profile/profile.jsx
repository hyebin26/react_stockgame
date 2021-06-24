import React from "react";
import HeaderContainer from "../../containers/headerContainer/headerContainer";
import ProfileText from "../profile_text/profileText";
import styles from "./profile.module.css";
import ProfilePieChart from "../profile_pieChart/profilePieChart";

const Profile = ({ database, isLoading }) => {
  if (isLoading === true)
    return (
      <section className={styles.loadingContainer}>
        <div className={styles.loading}></div>
      </section>
    );
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
