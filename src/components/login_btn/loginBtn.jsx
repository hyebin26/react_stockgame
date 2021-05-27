import React from "react";
import { useHistory } from "react-router";
import styles from "./loginBtn.module.css";

const LoginBtn = ({ auth }) => {
  const hisotry = useHistory();
  const onClickGoogle = () => {
    auth.clickGoogle().then((user) => {
      // localStorage.setItem("token", user.user.uid);
      hisotry.push("/main");
    });
  };
  const onClickGithub = () => {
    auth.clickGithub().then((user) => {
      // localStorage.setItem("token", user.user.uid);
      hisotry.push("/main");
    });
  };
  const onClickFacebook = () => {
    auth.clickFacebook().then((user) => {
      // localStorage.setItem("token", user.user.uid);
      hisotry.push("/main");
    });
  };
  return (
    <div className={styles.container}>
      <button className={styles.login_btn} onClick={onClickGoogle}>
        Google
      </button>
      <button className={styles.login_btn} onClick={onClickGithub}>
        Github
      </button>
      <button className={styles.login_btn} onClick={onClickFacebook}>
        Facebook
      </button>
    </div>
  );
};

export default LoginBtn;
