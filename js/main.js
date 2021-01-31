const getRandomNumber = (a = 0, b = 0, lengthRemainder = 0) => {
  const remainder = Math.pow(10, lengthRemainder);
  const min = Math.min(a, b) * remainder;
  const max = Math.max(a, b) * remainder;
  if (min < 0) {
    return NaN;
  }
  const number = (Math.floor(Math.random() * (max - min + 1)) + min) / remainder;
  return number;
};

const RandomNumber = getRandomNumber(10, 3, 2);
alert(RandomNumber);
