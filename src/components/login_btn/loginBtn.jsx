import React from "react";
import styles from "./loginBtn.module.css";

const LoginBtn = (props) => {
  return (
    <div className={styles.container}>
      <button className={styles.login_btn}>Google</button>
      <button className={styles.login_btn}>Github</button>
      <button className={styles.login_btn}>Facebook</button>
    </div>
  );
};

export default LoginBtn;
