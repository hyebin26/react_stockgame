import React from "react";
import Header from "../header/header";
import styles from "./login.module.css";
import LoginBtn from "../login_btn/loginBtn";

const Login = (props) => {
  return (
    <section className={styles.container}>
      <Header login="login" />
      <div className={styles.content_container}>
        <p className={styles.login}>Login</p>
        <hr></hr>
        <LoginBtn />
      </div>
    </section>
  );
};

export default Login;
