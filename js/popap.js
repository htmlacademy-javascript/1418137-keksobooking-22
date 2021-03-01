import { createTemporaryData } from './create-temporary-data.js';


const similarAds = createTemporaryData(1);

const mapCanvas = document.querySelector('.map__canvas');
const adTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');


similarAds.forEach((ad) => {
  const adElement = adTemplate.cloneNode(true);

  const renameTypeHouse = (name) => {
    if (name === 'flat') {
      name = 'Квартира';
    }
    if (name === 'bungalow') {
      name = 'Бунгало';
    }
    if (name === 'house') {
      name = 'Дом';
    }
    if (name === 'palace') {
      name = 'Дворец ';
    }
    return name;
  };

  const showImages = (photos) => {
    const photosList = adElement.querySelector('.popup__photos');
    const photoTemlate = adElement.querySelector('.popup__photo');
    photosList.removeChild(photoTemlate);

    for (var i = 0; i < photos.length; i++) {
      const photo = photoTemlate.cloneNode();
      photo.src = photos[i];
      photosList.appendChild(photo);
    };
  };

  const addDataInTemplate = (classTemplateElement, data) => {
    const elementTemplate = adElement.querySelector(classTemplateElement);
    if (data === "") {
      elementTemplate.classList.add('hidden');
    } else {
      return data;
    }
  };

  adElement.querySelector('.popup__title').textContent = addDataInTemplate('.popup__title', ad.offer.title);
  adElement.querySelector('.popup__text--address').textContent = addDataInTemplate('.popup__text--address', ad.offer.address);
  adElement.querySelector('.popup__text--price').textContent = addDataInTemplate('.popup__text--price', ad.offer.price) + ' ₽/ночь';
  adElement.querySelector('.popup__type').textContent = addDataInTemplate('.popup__type', renameTypeHouse(ad.offer.type));
  adElement.querySelector('.popup__text--capacity').textContent = addDataInTemplate('.popup__text--capacity', ad.offer.rooms) + ' комнаты для ' + addDataInTemplate('.popup__text--capacity', ad.offer.guests) + ' гостей';
  adElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + addDataInTemplate('.popup__text--time', ad.offer.checkin) + ' , выезд до ' + addDataInTemplate('.popup__text--time', ad.offer.checkout);
  adElement.querySelector('.popup__features').textContent = addDataInTemplate('.popup__features', ad.offer.features);
  adElement.querySelector('.popup__description').textContent = addDataInTemplate('.popup__description', ad.offer.description);
  showImages(ad.offer.photos);
  adElement.querySelector('.popup__avatar').src = ad.author.avatar;

  mapCanvas.appendChild(adElement);
});
