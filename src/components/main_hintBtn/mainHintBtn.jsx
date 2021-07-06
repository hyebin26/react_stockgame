import React, { memo } from "react";
import styles from "./mainHintBtn.module.css";

const MainHintBtn = memo(({ point, onClickHintBtn }) => {
  const onClickHint = () => {
    onClickHintBtn(point);
  };
  if (point === 1)
    return (
      <button className={styles.oneBtn} onClick={onClickHint}>
        {point}점 힌트
      </button>
    );
  return (
    <button className={styles.threeBtn} onClick={onClickHint}>
      {point}점 힌트
    </button>
  );
});

export default MainHintBtn;
