import React from "react";
import { Link } from "react-router-dom";
import styles from "./nav.module.css";

const Nav = (props) => {
  return (
    <>
      <li>
        <a href="#">힌트저장소</a>
      </li>
      <li>
        <a href="#">거래소</a>
      </li>
      <li>
        <Link to="/profile" className={styles.link}>
          투자내역
        </Link>
      </li>
      <li>
        <a href="#">로그아웃</a>
      </li>
    </>
  );
};

export default Nav;
