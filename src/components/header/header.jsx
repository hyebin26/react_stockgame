import { faDizzy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Nav from "../nav/nav";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <FontAwesomeIcon icon={faDizzy} size="2x" />
        <h2 className={styles.logo}>Stock Game</h2>
        <ul className={styles.info}>
          <li>day 3</li>
          <li>현재 이익률 10%</li>
          <button className={styles.nextBtn}>Next day</button>
        </ul>
        <ul className={styles.nav}>
          <Nav />
        </ul>
      </div>
    </header>
  );
};

export default Header;
