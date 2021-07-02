import React from "react";
import styles from "./hintCounting.module.css";

const HintCounting = ({ hintPoint, length }) => {
  return (
    <section className={styles.container}>
      <h2>보유 힌트: {length}</h2>
      <h2>남은 힌트 포인트 : {hintPoint}</h2>
    </section>
  );
};

export default HintCounting;
