import React from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import HeaderNav from "../../components/header_nav/headerNav";

const HeaderNavContainer = (props) => {
  const history = useHistory();
  const onClickLogout = () => {
    swal({ text: "로그아웃을 하시겠습니까?", buttons: true }).then((agree) => {
      if (agree) {
        history.replace("/");
        localStorage.removeItem("token");
      }
    });
  };
  return <HeaderNav onClickLogout={onClickLogout} />;
};

export default HeaderNavContainer;
