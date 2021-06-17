import { FaRegMoneyBillAlt } from "react-icons/fa";
import React from "react";
import Nav from "../nav/nav";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = ({ login, day, onClickNextBtn }) => {
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
        <ul className={styles.info}>
          <li>day {day}</li>
          <li>현재 이익률 10%</li>
          <button className={styles.nextBtn} onClick={onClickNextBtn}>
            Next day
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
