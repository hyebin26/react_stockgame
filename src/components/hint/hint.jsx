import React from "react";
import HeaderContainer from "../../containers/headerContainer/headerContainer";
import HintCountingContainer from "../../containers/hintCountingContainer/hintCountingContainer";
import HintItem from "../hint_item/hintItem";
import styles from "./hint.module.css";

const Hint = ({ database }) => {
  return (
    <div className={styles.container}>
      <HeaderContainer database={database} />
      <HintCountingContainer />
      <HintItem title="Three Point" />
      <HintItem title="One Point" />
    </div>
  );
};

export default Hint;
