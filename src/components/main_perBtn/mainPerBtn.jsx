import React from "react";
import styles from "./mainPerBtn.module.css";

const MainPerBtn = (props) => {
  return (
    <div className={styles.container}>
      <button>0%</button>
      <button>25%</button>
      <button>50%</button>
      <button>75%</button>
      <button>100%</button>
    </div>
  );
};

export default MainPerBtn;
