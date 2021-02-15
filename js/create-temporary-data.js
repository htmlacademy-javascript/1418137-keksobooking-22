import { getRandomNumber, getRandomElemets } from './util.js'

const getAvatarRandomNumber = (a, b) => {
  const AvatarNumber = getRandomNumber(a, b);
  if (AvatarNumber < 10) {
    return '0' + AvatarNumber;
  } else {
    return AvatarNumber;
  }
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
      avatar: `img/avatars/user${getAvatarRandomNumber(1, 8)}.png`,
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


const createTemporaryData = (quantity) => {
  const temporaryData = [];

  for (let i = 0; i < quantity; i++) {
    const announcement = createAnnouncement();
    temporaryData.push(announcement);
  }


  return temporaryData;
};

export { createTemporaryData };
