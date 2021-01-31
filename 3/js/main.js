//Первая часть задания (общая)
const getRandomNum = function (min, max) {
  if (min >= 0 && min < max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let number = (Math.floor(Math.random() * (max - min + 1)) + min);
    return number;
  } else {
    return ('Некорректные значения. Пожалуйста, поменяйте.');
  }
};

let RandomNum = getRandomNum(1, 3);
alert(RandomNum);

// Вторая часть задания (относящаяся к проекту)
const getRandomNumber = function (min, max, lengthRemainder) {
  if (min >= 0 && min < max) {
    let remainder = Math.pow(10, lengthRemainder);
    min = Math.floor(min * remainder);
    max = Math.floor(max * remainder);
    let number = (Math.floor(Math.random() * (max - min + 1)) + min) / remainder;
    return number;
  } else {
    return ('Некорректные значения. Пожалуйста, поменяйте.');
  }
};

let RandomNumber = getRandomNumber(-1.5, 1.3, 4);
alert(RandomNumber);
