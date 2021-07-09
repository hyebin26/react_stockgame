import React from "react";
import Header from "../header/header";
import styles from "./login.module.css";
import LoginBtnContainer from "../../containers/loginBtnContainer/loginBtnContainer";

const Login = ({ auth }) => {
  return (
    <section className={styles.container}>
      <Header login="login" />
      <div className={styles.contentContainer}>
        <p className={styles.login}>Login</p>
        <hr></hr>
        <LoginBtnContainer auth={auth} />
      </div>
    </section>
  );
};

export default Login;
