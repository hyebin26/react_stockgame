import React from "react";
import ProfileStockMoneyContainer from "../../containers/profileStockMoneyContainer/profileStockMoneyContainer";

import styles from "./profileText.module.css";

const ProfileText = (props) => {
  return (
    <div className={styles.container}>
      <ProfileStockMoneyContainer />
    </div>
  );
};

export default ProfileText;
