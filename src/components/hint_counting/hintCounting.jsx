import React from "react";
import styles from "./hintCounting.module.css";

const HintCounting = (props) => {
  return (
    <section className={styles.container}>
      <h2>보유 힌트: 5</h2>
      <h2>남은 힌트 포인트 : 15</h2>
    </section>
  );
};

export default HintCounting;
