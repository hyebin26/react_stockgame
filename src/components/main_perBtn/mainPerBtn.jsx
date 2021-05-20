import React from "react";
import styles from "./mainPerBtn.module.css";
import { users } from "../../modules/object";
import { useState } from "react/cjs/react.development";

const MainPerBtn = (props) => {
  const money = users.token.money;
  const [currentMoney, setCurrentMoney] = useState(money);
  const handlePerBtn = (e) => {
    const perText = e.target.innerText;
    const replacePerText = parseInt(perText.replace(/[^0-9]/g, ""));

    setCurrentMoney(() => money * (replacePerText / 100));
  };

  return (
    <div className={styles.container}>
      <button onClick={handlePerBtn}>0%</button>
      <button onClick={handlePerBtn}>25%</button>
      <button onClick={handlePerBtn}>50%</button>
      <button onClick={handlePerBtn}>75%</button>
      <button onClick={handlePerBtn}>100%</button>
      <h2>{currentMoney}</h2>
    </div>
  );
};

export default MainPerBtn;
