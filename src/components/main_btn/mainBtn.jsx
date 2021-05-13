import React from "react";
import styles from "./mainBtn.module.css";

const MainBtn = (props) => {
  const title = props.title;
  if (title === "매수") return <button className={styles.buyBtn}>매수</button>;
  return <button className={styles.sellBtn}>매도</button>;
}

export default MainBtn;
