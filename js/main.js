const getRandomNumber = (a = 0, b = 0, lengthRemainder = 0) => {
  const remainder = Math.pow(10, lengthRemainder);
  const min = Math.min(a, b) * remainder;
  const max = Math.max(a, b) * remainder;
  if (min < 0) {
    return NaN;
  }

  return +(((Math.floor(Math.random() * (max - min + 1)) + min) / remainder).toFixed(lengthRemainder));
};


// Ничего получше я не смогла придумать...
const getAvatarRandomNumber = (a, b) => {
  const AvatarNumber = getRandomNumber(a, b);
  if (AvatarNumber < 10) {
    return '0' + AvatarNumber;
  } else {
    return AvatarNumber;
  }
};

const getRandomElemets = (array, min = 1) => {
  // Исправила min на 1, потому что у нас на выходе должен быть хотя бы 1 элемент
  const randomLength = getRandomNumber(min, array.length);
  const newArray = [...array].sort(() => Math.random() - 0.5);
  return newArray.slice(0, randomLength);
};


const createAnnouncement = () => {
  const randomLocation = {
    x: getRandomNumber(35.65000, 35.70000, 5),
    y: getRandomNumber(139.70000, 139.80000, 5),
  };

  const allTypeHouse = ['palace', 'flat', 'house', 'bungalow'];
  const allFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  const allPhotos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

  const announcement = {
    author: {
      avatar: `img/avatars/user${getAvatarRandomNumber(1, 12)}.png`,
    },

    offer: {
      title: 'Создайте объявление',
      address: `${randomLocation.x}, ${randomLocation.y}`,
      price: getRandomNumber(3000, 20000),
      type: getRandomElemets(allTypeHouse, 1).pop(),
      rooms: getRandomNumber(1, 5),
      guests: getRandomNumber(1, 5),
      checkin: getRandomNumber(12, 14) + ':00',
      checkout: getRandomNumber(12, 14) + ':00',
      features: getRandomElemets(allFeatures, 2),
      description: 'Прекрасный вид на набережную',
      photos: getRandomElemets(allPhotos),
    },

    location: {
      x: randomLocation.x,
      y: randomLocation.y,
    },
  };

  return announcement;
}


const createTemporaryData = () => {
  const temporaryData = [];

  for (let i = 0; i < 10; i++) {
    const announcement = createAnnouncement();
    temporaryData.push(announcement);
  }


  return temporaryData;
}

createTemporaryData();
