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
    }
  });
};

export default HintListContainer;
