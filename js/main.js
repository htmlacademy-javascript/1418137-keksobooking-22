const getRandomNumber = (a = 0, b = 0, lengthRemainder = 0) => {
  const remainder = Math.pow(10, lengthRemainder);
  const min = Math.min(a, b) * remainder;
  const max = Math.max(a, b) * remainder;
  if (min < 0) {
    return NaN;
  }
  return (Math.floor(Math.random() * (max - min + 1)) + min) / remainder;
};

const createRandonLengthArray = (basicArray) => {
  const randomLength = getRandomNumber(1, basicArray.length);
  const randonLengthArray = [];

  for (i = 1; i <= randomLength; i++) {
    const getRandomItem = () => {
      const randomItem = basicArray[getRandomNumber(0, basicArray.length - 1)];

      const isNotSimilarItem = randonLengthArray.every((value) => {
        return value !== randomItem;
      });

      if (isNotSimilarItem === true) {
        randonLengthArray.push(randomItem);
      } else {
        getRandomItem();
      }
    };
    getRandomItem();
  };
  return randonLengthArray;
};


const createTemporaryData = () => {
  const temporaryData = [];

  const randomLocation = {
    x: getRandomNumber(35.65000, 35.70000, 5),
    y: getRandomNumber(139.70000, 139.80000, 5).toFixed(5)
  };

  const allTypeHouse = ['palace', 'flat', 'house', 'bungalow'];
  const allFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  const allPhotos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];


  // Первый объект: Author

  const createRandomAuthor = (a = 1, b = 8) => {
    const author = {
      avatar: 'img/avatars/user0' + (Math.floor(Math.random() * (b - a + 1)) + a) + '.png'
    }
    return author;
  };

  console.log(createRandomAuthor());
  temporaryData.push(createRandomAuthor());


  // Второй объект: Offer

  const createOffer = () => {
    const offer = {
      title: 'Создайте объявление',
      address: 'Адрес: ' + randomLocation.x + ' и ' + randomLocation.y,
      price: getRandomNumber(0, 30000),
      type: allTypeHouse[getRandomNumber(0, allTypeHouse.length - 1)],
      rooms: getRandomNumber(1, 5),
      guests: getRandomNumber(1, 5),
      checkin: getRandomNumber(12, 14) + ':00',
      checkout: getRandomNumber(12, 14) + ':00',
      features: createRandonLengthArray(allFeatures),
      description: 'Прекрасный вид на набережную',
      photos: createRandonLengthArray(allPhotos)
    }
    return offer;
  };

  console.log(createOffer());
  temporaryData.push(createOffer());


  // Третий обьект: Location

  const location = {
    x: randomLocation.x,
    y: randomLocation.y
  };

  console.log(location);
  temporaryData.push(location);

  return temporaryData;
}

console.log(createTemporaryData());
