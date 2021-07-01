import React from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import MainHintBtn from "../../components/main_hintBtn/mainHintBtn";
import { clickHintBtn } from "../../modules/main";

const MainHintBtnContainer = ({ point, label }) => {
  const dispatch = useDispatch();
  const { hintPoint } = useSelector((state) => state.main);
  const onClickHintBtn = (num) => {
    swal({
      buttons: true,
      text: `${label} ${num}point 힌트를 확인하겠습니까? (현재 포인트 : ${hintPoint})`,
    }).then((agree) => {
      if (agree) {
        return dispatch(clickHintBtn({ label, point }));
      }
    });
  };
  return <MainHintBtn point={point} onClickHintBtn={onClickHintBtn} />;
};

export default MainHintBtnContainer;
