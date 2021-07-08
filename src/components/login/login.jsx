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
        <h2>test5</h2>
        <LoginBtnContainer auth={auth} />
      </div>
    </section>
  );
};

export default Login;
