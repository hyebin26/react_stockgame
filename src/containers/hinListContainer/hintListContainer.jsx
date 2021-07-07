import React from "react";
import { useSelector } from "react-redux";
import HintList from "../../components/hint_list/hintList";

const HintListContainer = ({ point }) => {
  const { haveHints } = useSelector((state) => state.main);
  return haveHints.map((item, index) => {
    if (typeof item === "object") {
      if (item.point === point) {
        let category = item.label.split(" ")[1];
        let color =
          category === "IT"
            ? "beige"
            : category === "엔터"
            ? "green"
            : category === "식품"
            ? "pink"
            : category === "바이오"
            ? "blue"
            : category === "항공사"
            ? "orange"
            : "";
        // item.point가 1인게 하나라도 있으면 checkOnePoint = false;
        // item.point가 3인게 하나라도 있으면 checkThreePoint = false;

        return (
          <HintList
            key={index}
            day={item.day}
            label={item.label}
            text={item.text}
            color={color}
          />
        );
      }
    } else if (haveHints.length === 1) {
      <HintList nothing={true} />;
    }
    return null;
  });
};

export default HintListContainer;
