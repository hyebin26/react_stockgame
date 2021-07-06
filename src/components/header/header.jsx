import { FaRegMoneyBillAlt } from "react-icons/fa";
import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import HeaderNavContainer from "../../containers/headerNavContainer/headerNavContainer";
import { useState } from "react";

const Header = ({ login, day, onClickNextBtn, onResetBtn }) => {
  const [toggle, setToggle] = useState(true);
  const clickHambuger = () => {
    setToggle(!toggle);
  };
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
          <li>Day {day}</li>
          <button className={styles.nextBtn} onClick={onClickNextBtn}>
            Next day
          </button>
          <button className={styles.resetBtn} onClick={onResetBtn}>
            Reset
          </button>
        </ul>
        <ul className={styles.nav}>
          <HeaderNavContainer />
        </ul>
        <ul className={styles.hamburger} onClick={clickHambuger}>
          <div
            className={
              toggle
                ? styles.hamburgerLine
                : `${styles.hamburgerLine} ${styles.top}`
            }
          ></div>
          <div
            className={
              toggle
                ? styles.hamburgerLine
                : `${styles.hamburgerLine} ${styles.mid}`
            }
          ></div>
          <div
            className={
              toggle
                ? styles.hamburgerLine
                : `${styles.hamburgerLine} ${styles.bot}`
            }
          ></div>
        </ul>
        <div
          className={
            toggle
              ? styles.hideContainer
              : `${styles.hideContainer} ${styles.showHideContainer}`
          }
        >
          <HeaderNavContainer hide={true} />
        </div>
      </div>
    </header>
  );
};

export default Header;
