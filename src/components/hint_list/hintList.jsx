import React from "react";
import styles from "./hintList.module.css";

const HintList = (props) => {
  return (
    <>
      <li className={styles.container}>
        <p className={styles.text}>3DAY</p>
        <p className={styles.text}>H전자(은)는 급등할 것입니다</p>
      </li>{" "}
      <li className={styles.container}>
        <p className={styles.text}>3DAY</p>
        <p className={styles.text}>H전자(은)는 급등할 것입니다</p>
      </li>{" "}
      <li className={styles.container}>
        <p className={styles.text}>3DAY</p>
        <p className={styles.text}>H전자(은)는 급등할 것입니다</p>
      </li>
    </>
  );
};

export default HintList;
