import {
  faClone,
  faGem,
  faGrinTongue,
  faHandPointer,
  faKeyboard,
  faPauseCircle,
  faSnowflake,
  faStickyNote,
  faStopCircle,
} from "@fortawesome/free-regular-svg-icons";

export const users = {
  token: {
    currentDay: 1,
    money: 1000000,
    haveStock: [
      {
        lebel: "H전자",
        amount: 5,
        price: 15000,
      },
    ],
    haveHint: {},
  },
  token2: {},
};

export const stocks = [
  { label: "H전자", price: [15000], icon: faStopCircle },
  { label: "C엔터", price: [13000], icon: faGrinTongue },
  { label: "J반도체", price: [8000], icon: faKeyboard },
  { label: "S바이오", price: [3000], icon: faHandPointer },
  { label: "K엔터", price: [9500], icon: faGem },
  { label: "A바이오", price: [5500], icon: faSnowflake },
  { label: "L전자", price: [4000], icon: faPauseCircle },
  { label: "S반도체", price: [11000], icon: faStickyNote },
  { label: "Q항공사", price: [10000], icon: faClone },
];
