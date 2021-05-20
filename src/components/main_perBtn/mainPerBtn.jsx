import React from "react";
import styles from "./mainPerBtn.module.css";
import { users } from "../../modules/object";
import { useState } from "react/cjs/react.development";
import { useDispatch, useSelector } from "react-redux";
import { handlePerBtn } from "../../modules/buy";

const MainPerBtn = (props) => {
  const dispatch = useDispatch();
  const onHandlePerBtn = (e) => {
    const btnVal = e.target.innerText;
    const regex = /[^0-9]/g;
    const result = btnVal.replace(regex, "");
    dispatch(handlePerBtn(result));
  };

  return (
    <div className={styles.container}>
      <button onClick={onHandlePerBtn}>0%</button>
      <button onClick={onHandlePerBtn}>25%</button>
      <button onClick={onHandlePerBtn}>50%</button>
      <button onClick={onHandlePerBtn}>75%</button>
      <button onClick={onHandlePerBtn}>100%</button>
    </div>
  );
};

export default MainPerBtn;
