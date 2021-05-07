import { faDizzy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
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
        </ul>
        <ul className={styles.nav}>
          <li>
            <a href="#">힌트저장소</a>
          </li>
          <li>
            <a href="#">거래소</a>
          </li>
          <li>
            <a href="#">투자내역</a>
          </li>
          <li>
            <a href="#">로그아웃</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
