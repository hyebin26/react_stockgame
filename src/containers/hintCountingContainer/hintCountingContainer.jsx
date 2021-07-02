import React from "react";
import { useSelector } from "react-redux";
import HintCounting from "../../components/hint_counting/hintCounting";

const HintCountingContainer = (props) => {
  const { hintPoint, haveHints } = useSelector((state) => state.main);

  return <HintCounting hintPoint={hintPoint} length={haveHints.length - 1} />;
};

export default HintCountingContainer;
