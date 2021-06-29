import React from "react";
import HintList from "../hint_list/hintList";
import styles from "./hintItem.module.css";

const HintItem = ({ title }) => {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.listContainer}>
        <HintList />
      </ul>
    </section>
  );
};

export default HintItem;
