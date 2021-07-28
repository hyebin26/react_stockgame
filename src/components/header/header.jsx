import { ImCoinDollar } from "react-icons/im";
import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import HeaderNavContainer from "../../containers/headerNavContainer/headerNavContainer";

const Header = ({
  login,
  day,
  onClickNextBtn,
  onResetBtn,
  toggle,
  onClickHambuger,
  hasMoney,
}) => {
  if (login) {
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <Link to="/" className={styles.logo}>
            <ImCoinDollar />
            Stock Game
          </Link>
        </div>
      </header>
    );
  }
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/main" className={styles.logo}>
          <ImCoinDollar />
          Stock Game
        </Link>
        <div className={styles.info}>
          <p>Day {day}</p>
          <button className={styles.nextBtn} onClick={onClickNextBtn}>
            Next day
          </button>
          <button className={styles.resetBtn} onClick={onResetBtn}>
            Reset
          </button>
          <p className={styles.money}>{hasMoney.toLocaleString("ko-KR")}</p>
        </div>
        <ul className={styles.nav}>
          <HeaderNavContainer />
        </ul>
        <ul className={styles.hamburger} onClick={onClickHambuger}>
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
