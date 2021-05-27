import React from "react";
import { useHistory } from "react-router";
import styles from "./loginBtn.module.css";

const LoginBtn = ({ auth }) => {
  const hisotry = useHistory();

  const onClickAuth = (e) => {
    auth.clickAuth(e.target.innerText).then((uer) => {
      // localStorage.setItem("token", user.user.uid);
      hisotry.push("/main");
    });
  };

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
