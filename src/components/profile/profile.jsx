import React from "react";
import HeaderContainer from "../../containers/headerContainer/headerContainer";
import ProfileText from "../profile_text/profileText";
import styles from "./profile.module.css";
import ProfileItem from "../profile_item/profileItem";
import ProfileChartContainer from "../../containers/profileChartContainer/profileChartContainer";

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
          <ProfileChartContainer />
        </div>
      </section>
      <section className={styles.itemContainer}>
        <ProfileItem />
      </section>
    </div>
  );
};

export default Profile;
