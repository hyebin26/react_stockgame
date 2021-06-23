import React from "react";
import ProfileTextMoneyContainer from "../../containers/profile_textMoneyContainer/profileTextMoneyContainer";
import ProfileTextStock from "../profile_textStock/profileTextStock";
import styles from "./profileText.module.css";

const ProfileText = (props) => {
  return (
    <div className={styles.container}>
      <ProfileTextMoneyContainer />
      <ProfileTextStock />
    </div>
  );
};

export default ProfileText;
