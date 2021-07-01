import React from "react";
import { useSelector } from "react-redux";
import HintList from "../../components/hint_list/hintList";

const HintListContainer = ({ point }) => {
  const { haveHints, hintPoint } = useSelector((state) => state.main);
  return haveHints.map((item, index) => {
    if (typeof item === "object") {
      if (item.point === point) {
        return (
          <HintList
            key={index}
            day={item.day}
            label={item.label}
            text={item.text}
          />
        );
      }
    }
  });
};

export default HintListContainer;
