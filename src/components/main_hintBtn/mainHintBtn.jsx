import React from "react";
import styles from "./mainHintBtn.module.css";

const MainHintBtn = ({ point, onClickHintBtn }) => {
  const onClickHint = () => {
    onClickHintBtn(point);
  };
  if (point === 1)
    return (
      <button className={styles.oneBtn} onClick={onClickHint}>
        {point}Point
      </button>
    );
  return (
    <button className={styles.threeBtn} onClick={onClickHint}>
      {point}Point
    </button>
  );
};

export default MainHintBtn;
