const getRandomNumber = (a = 0, b = 0, lengthRemainder = 0) => {
  const remainder = Math.pow(10, lengthRemainder);
  const min = Math.min(a, b) * remainder;
  const max = Math.max(a, b) * remainder;
  if (min < 0) {
    return NaN;
  }

  return +(((Math.floor(Math.random() * (max - min + 1)) + min) / remainder).toFixed(lengthRemainder));
};

const getRandomElemets = (array, min = 1) => {
  const randomLength = getRandomNumber(min, array.length);
  const newArray = [...array].sort(() => Math.random() - 0.5);
  return newArray.slice(0, randomLength);
};

export { getRandomNumber, getRandomElemets };
