import React from "react";
import { memo } from "react";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import HeaderNav from "../../components/header_nav/headerNav";

const HeaderNavContainer = memo(({ hide }) => {
  const history = useHistory();
  const onClickLogout = useCallback(() => {
    swal({ text: "로그아웃을 하시겠습니까?", buttons: true }).then((agree) => {
      if (agree) {
        history.replace("/");
        localStorage.removeItem("token");
      }
    });
  }, [history]);
  return <HeaderNav onClickLogout={onClickLogout} hide={hide} />;
});

export default HeaderNavContainer;
