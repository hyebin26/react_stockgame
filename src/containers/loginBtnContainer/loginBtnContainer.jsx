import React from "react";
import { useHistory } from "react-router";
import swal from "sweetalert";
import LoginBtn from "../../components/login_btn/loginBtn";

const LoginBtnContainer = ({ auth }) => {
  const hisotry = useHistory();
  const onClickAuth = (e) => {
    auth
      .clickAuth(e.target.innerText) //
      .then((user) => {
        localStorage.setItem("token", user.user.uid);
        hisotry.push("/main");
      })
      .catch((err) => {
        swal("로그인을 다시 시도해주세요");
      });
  };

  return <LoginBtn onClickAuth={onClickAuth} />;
};

export default LoginBtnContainer;
