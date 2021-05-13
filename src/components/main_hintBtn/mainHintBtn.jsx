import React from "react";
import styles from "./mainHintBtn.module.css";

const MainHintBtn = (props) => {
  const { hintPoint } = props;

  if (hintPoint === 1)
    return <button className={styles.oneBtn}>{hintPoint}Point</button>;
  return <button className={styles.threeBtn}>{hintPoint}Point</button>;
};

export default MainHintBtn;
