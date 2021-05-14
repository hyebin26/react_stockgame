function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}
const handlePercent = () => {
  let percent = getRandomInt(0, 100);
  let stockPer;
  if (0 <= percent && percent <= 22) {
    stockPer = getRandomInt(0, 6);
    console.log(stockPer, "StockPer");
  } else if (23 <= percent && percent <= 45) {
    stockPer = getRandomInt(6, 10);
    console.log(stockPer, "StockPer");
  } else if (46 <= percent && percent <= 55) {
    console.log(2);
  } else if (56 <= percent && percent <= 65) {
    console.log(-2);
  } else if (66 <= percent && percent <= 72) {
    console.log(3);
  } else if (73 <= percent && percent <= 79) {
    console.log(3);
  } else if (80 <= percent && percent <= 83) {
    console.log(4);
  } else if (84 <= percent && percent <= 87) {
    console.log(-4);
  } else if (88 <= percent && percent <= 90) {
    console.log(5);
  } else if (91 <= percent && percent <= 93) {
    console.log(-5);
  } else if (94 <= percent && percent <= 95) {
    console.log(6);
  } else if (96 <= percent && percent <= 97) {
    console.log(-6);
  } else if (percent === 98) {
    console.log(50);
  } else if (percent === 99) {
    console.log(-50);
  }
};
