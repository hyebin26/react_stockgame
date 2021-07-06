import React from "react";
import { Link } from "react-router-dom";
import styles from "./headerNav.module.css";

const HeaderNav = ({ onClickLogout, hide }) => {
  return (
    <>
      <li className={hide ? `${styles.list} ${styles.top}` : ""}>
        <Link to="/main" className={styles.link}>
          거래소
        </Link>
      </li>
      <li className={hide ? styles.list : ""}>
        <Link to="/profile" className={styles.link}>
          투자내역
        </Link>
      </li>
      <li className={hide ? styles.list : ""}>
        <Link to="/hint" className={styles.link}>
          힌트저장소
        </Link>
      </li>
      <li className={hide ? styles.list : ""}>
        <button onClick={onClickLogout} className={styles.button}>
          로그아웃
        </button>
      </li>
    </>
  );
};

export default HeaderNav;
