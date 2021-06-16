import { FaRegMoneyBillAlt } from "react-icons/fa";
import React from "react";
import Nav from "../nav/nav";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clickNextDay } from "../../modules/main";

const Header = (props) => {
  const dispatch = useDispatch();
  const { day } = useSelector((state) => state.main);
  const onClickNextBtn = () => {
    dispatch(clickNextDay());
  };

  if (props.login) {
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <FaRegMoneyBillAlt />
          <Link to="/" className={styles.logo}>
            Stock Game
          </Link>
          <h2></h2>
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
