import React from "react";
import ProfileTextMoneyContainer from "../../containers/profile_textMoneyContainer/profileTextMoneyContainer";
import ProfileTextStockContainer from "../../containers/profile_textStockContainer/profileTextStockContainer";

import styles from "./profileText.module.css";

const ProfileText = (props) => {
  return (
    <div className={styles.container}>
      <ProfileTextMoneyContainer />
      <ProfileTextStockContainer />
    </div>
  );
};

export default ProfileText;
