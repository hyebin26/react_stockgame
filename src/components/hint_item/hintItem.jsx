import React from "react";
import HintListContainer from "../../containers/hinListContainer/hintListContainer";
import styles from "./hintItem.module.css";

const HintItem = ({ title }) => {
  const point = title === "Three Point" ? 3 : 1;
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.listContainer}>
        <HintListContainer point={point} />
      </ul>
    </section>
  );
};

export default HintItem;
