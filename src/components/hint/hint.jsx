import React from "react";
import { memo } from "react";
import HeaderContainer from "../../containers/headerContainer/headerContainer";
import HintCountingContainer from "../../containers/hintCountingContainer/hintCountingContainer";
import HintItem from "../hint_item/hintItem";
import styles from "./hint.module.css";

const Hint = memo(({ database, isLoading }) => {
  if (isLoading === true)
    return (
      <section className={styles.loadingContainer}>
        <div className={styles.loading}></div>
      </section>
    );
  return (
    <div className={styles.container}>
      <HeaderContainer database={database} />
      <HintCountingContainer />
      <HintItem title="Three Point" />
      <HintItem title="One Point" />
    </div>
  );
});

export default Hint;
