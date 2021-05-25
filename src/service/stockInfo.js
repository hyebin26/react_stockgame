const stocks = [
  { label: "H전자", price: [15000] },
  { label: "C엔터", price: [13000] },
  { label: "J반도체", price: [8000] },
  { label: "S바이오", price: [3000] },
  { label: "K엔터", price: [9500] },
  { label: "A바이오", price: [5500] },
  { label: "L전자", price: [4000] },
  { label: "S반도체", price: [11000] },
  { label: "Q항공사", price: [10000] },
];

const oneDay = [
  {
    lebel: "H전자",
    bigHint: "급등할 것입니다",
    smallHint: "아마도 급등",
    price: 16000,
  },
  {
    lebel: "C엔터",
    bigHint: "급등할 것입니다",
    smallHint: "아마도 급등",
    price: 16000,
  },
  {
    lebel: "J반도체",
    bigHint: "급등할 것입니다",
    smallHint: "아마도 급등",
    price: 16000,
  },
  {
    lebel: "S바이오",
    bigHint: "급등할 것입니다",
    smallHint: "아마도 급등",
    price: 16000,
  },
  {
    lebel: "K엔터",
    bigHint: "급등할 것입니다",
    smallHint: "아마도 급등",
    price: 16000,
  },
  {
    lebel: "A바이오",
    bigHint: "급등할 것입니다",
    smallHint: "아마도 급등",
    price: 16000,
  },
  {
    lebel: "L전자",
    bigHint: "급등할 것입니다",
    smallHint: "아마도 급등",
    price: 16000,
  },
  {
    lebel: "S반도체",
    bigHint: "급등할 것입니다",
    smallHint: "아마도 급등",
    price: 16000,
  },
  {
    lebel: "Q항공사",
    bigHint: "급등할 것입니다",
    smallHint: "아마도 급등",
    price: 16000,
  },
];

const user = {
  current: "token",
  money: 10000000,
  haveStock: {
    lebel: "H전자",
    price: 8000,
    number: 20,
  },
};

// 날이 바뀔때마다 lebel에 같은 것이 있다면  기존의 객체에 price만 변경
// 아닐시 객체 추가
