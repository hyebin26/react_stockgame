import React from "react";
import { Link } from "react-router-dom";
import styles from "./headerNav.module.css";

const HeaderNav = ({ onClickLogout }) => {
  return (
    <>
      <li>
        <Link to="/main" className={styles.link}>
          거래소
        </Link>
      </li>
      <li>
        <Link to="/profile" className={styles.link}>
          투자내역
        </Link>
      </li>
      <li>
        <Link to="/hint" className={styles.link}>
          힌트저장소
        </Link>
      </li>
      <li>
        <button onClick={onClickLogout} className={styles.button}>
          로그아웃
        </button>
      </li>
    </>
  );
};

export default HeaderNav;
