import React from "react";
import ProfileTextMoney from "../profile_textMoney/profileTextMoney";
import ProfileTextStock from "../profile_textStock/profileTextStock";
import styles from "./profileText.module.css";

const ProfileText = (props) => {
  return (
    <div className={styles.container}>
      <ProfileTextMoney />
      <ProfileTextStock />
    </div>
  );
};

export default ProfileText;
