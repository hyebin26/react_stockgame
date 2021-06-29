import React from "react";
import HeaderContainer from "../../containers/headerContainer/headerContainer";
import HintCounting from "../hint_counting/hintCounting";
import HintItem from "../hint_item/hintItem";
import styles from "./hint.module.css";

const Hint = ({ database }) => {
  return (
    <div className={styles.container}>
      <HeaderContainer database={database} />
      <HintCounting />
      <HintItem title="Three Point" />
      <HintItem title="One Point" />
    </div>
  );
};

export default Hint;
