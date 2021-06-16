function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

const makeStockPer = (percent) => {
  if (0 <= percent && percent <= 22) {
    return getRandomInt(1, 6);
  } else if (23 <= percent && percent <= 45) {
    return getRandomInt(-1, -6);
  } //
  else if (46 <= percent && percent <= 55) {
    return getRandomInt(6, 11);
  } else if (56 <= percent && percent <= 65) {
    return getRandomInt(-6, -11);
  } //
  else if (66 <= percent && percent <= 72) {
    return getRandomInt(11, 16);
  } else if (73 <= percent && percent <= 79) {
    return getRandomInt(-11, -16);
  } //
  else if (80 <= percent && percent <= 83) {
    return getRandomInt(16, 21);
  } else if (84 <= percent && percent <= 87) {
    return getRandomInt(-16, -21);
  } //
  else if (88 <= percent && percent <= 90) {
    return getRandomInt(21, 31);
  } else if (91 <= percent && percent <= 93) {
    return getRandomInt(-21, -31);
  } //
  else if (94 <= percent && percent <= 95) {
    return getRandomInt(31, 41);
  } else if (96 <= percent && percent <= 97) {
    return getRandomInt(-31, -41);
  } //
  else if (percent === 98) {
    return getRandomInt(41, 51);
  } else if (percent === 99) {
    return getRandomInt(-41, -51);
  }
};
export const handlePercentAPI = () => {
  let percent = getRandomInt(0, 100);
  const stockPer = makeStockPer(percent);
  return stockPer;
};
