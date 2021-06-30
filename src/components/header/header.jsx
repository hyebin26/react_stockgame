import { FaRegMoneyBillAlt } from "react-icons/fa";
import React from "react";
import Nav from "../nav/nav";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = ({ login, day, onClickNextBtn, onResetBtn }) => {
  if (login) {
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <FaRegMoneyBillAlt />
          <Link to="/" className={styles.logo}>
            Stock Game
          </Link>
        </div>
      </header>
    );
  }
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <FaRegMoneyBillAlt />
        <Link to="/main" className={styles.logo}>
          Stock Game
        </Link>
        <button onClick={test}>Test</button>
        <ul className={styles.info}>
          <li>Day {day}</li>
          <button className={styles.nextBtn} onClick={onClickNextBtn}>
            Next day
          </button>
          <button className={styles.resetBtn} onClick={onResetBtn}>
            Reset
          </button>
        </ul>
        <ul className={styles.nav}>
          <Nav />
        </ul>
      </div>
    </header>
  );
};

export default Header;
