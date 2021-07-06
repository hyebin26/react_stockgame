import React from "react";
import { memo } from "react";
import styles from "./hintList.module.css";

const HintList = memo(({ day, label, text, color }) => {
  console.log(day);
  return (
    <li className={`${styles.container} ${styles[color]}`}>
      <p className={styles.text}>{day}DAY</p>
      <p className={styles.text}>
        {label} {text}
      </p>
    </li>
  );
});

export default HintList;
