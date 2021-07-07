import React from "react";
import styles from "./loginBtn.module.css";

const LoginBtn = ({ onClickAuth }) => {
  return (
    <div className={styles.container}>
      <button className={styles.login_btn} onClick={onClickAuth}>
        Google
      </button>
      <button className={styles.login_btn} onClick={onClickAuth}>
        Github
      </button>
      <button className={styles.login_btn} onClick={onClickAuth}>
        Facebook
      </button>
    </div>
  );
};

export default LoginBtn;
