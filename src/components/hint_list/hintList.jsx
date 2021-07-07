import React from "react";
import { memo } from "react";
import styles from "./hintList.module.css";

const HintList = memo(({ day, label, text, color, nothing }) => {
  if (nothing) {
    return (
      <li className={`${styles.container} ${styles[color]}`}>
        <p className={styles.text}>보유한 힌트가 없습니다.</p>
      </li>
    );
  }
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
