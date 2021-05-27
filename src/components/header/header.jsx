import { FaRegMoneyBillAlt } from "react-icons/fa";
import React from "react";
import Nav from "../nav/nav";
import styles from "./header.module.css";
import { handlePercent } from "../../service/percent";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const Header = (props) => {
  const handleNextBtn = () => {
    swal({
      text: "다음 스테이지로 넘아가겠습니까?",
      icon: "success",
      buttons: true,
    }).then((agree) => {
      if (agree) {
        const stockPer = handlePercent();
        const currentPrice = Math.floor(150000 * (1 + stockPer / 100));
        console.log("전일대비", stockPer);
        console.log("현재가격", currentPrice);
      } else {
        console.log("noob");
      }
    });
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
        <h2 className={styles.logo}>Stock Game</h2>
        <ul className={styles.info}>
          <li>day 3</li>
          <li>현재 이익률 10%</li>
          <button className={styles.nextBtn} onClick={handleNextBtn}>
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
