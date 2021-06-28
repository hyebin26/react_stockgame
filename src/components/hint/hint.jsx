import React from "react";
import HeaderContainer from "../../containers/headerContainer/headerContainer";
import HintCounting from "../hint_counting/hintCounting";
import HintOnePoint from "../hint_onePoint/hintOnePoint";
import HintThreePoint from "../hint_threePoint/hintThreePoint";
import styles from "./hint.module.css";

const Hint = ({ database }) => {
  return (
    <div className={styles.container}>
      <HeaderContainer database={database} />
      <HintCounting />
      <HintThreePoint />
      <HintOnePoint />
    </div>
  );
};

export default Hint;
