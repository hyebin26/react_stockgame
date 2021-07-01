import React from "react";
import styles from "./hintList.module.css";

const HintList = ({ day, label, text }) => {
  return (
    <li className={styles.container}>
      <p className={styles.text}>{day}DAY</p>
      <p className={styles.text}>
        {label} {text}
      </p>
    </li>
  );
};

export default HintList;
