const mapCanvas = document.querySelector('.map__canvas');
const adTemplate = document.querySelector('#card');

const addDataInTemplate = (classTemplateElement, data, adElementTemplate) => {
  const elementTemplate = adElementTemplate.querySelector(classTemplateElement);
  if (data === '') {
    elementTemplate.classList.add('hidden');
  } else {
    return data;
  }
};

const renameRooms = data => {
  if (data % 10 === 1 && data != 11) {
    return data + ' комната';
  } else {
    if (2 <= (data % 10) <= 4) {
      return data + ' комнаты';
    } else {
      return data + ' комнат';
    }
  }
};

const renameGuests = data => {
  if (data % 10 === 1 && data != 11) {
    return data + ' гостя';
  } else {
    return data + ' гостей';
  }
};

const renameTypeHouse = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
};

const showImages = (photos, adElementTemplate) => {
  const photosList = adElementTemplate.querySelector('.popup__photos');
  const photoTemlate = adElementTemplate.querySelector('.popup__photo');
  photosList.removeChild(photoTemlate);

  for (let i = 0; i < photos.length; i++) {
    const photo = photoTemlate.cloneNode();
    photo.src = photos[i];
    photosList.appendChild(photo);
  }
};

const render = ad => {
  const adElement = adTemplate.content.cloneNode(true);

  adElement.querySelector('.popup__avatar').setAttribute('src', ad.author.avatar);
  adElement.querySelector('.popup__title').textContent = addDataInTemplate('.popup__title', ad.offer.title, adElement);
  adElement.querySelector('.popup__text--address').textContent = addDataInTemplate('.popup__text--address', ad.offer.address, adElement);
  adElement.querySelector('.price').textContent = addDataInTemplate('.popup__text--price', ad.offer.price, adElement);
  adElement.querySelector('.popup__type').textContent = renameTypeHouse[ad.offer.type];

  adElement.querySelector('.number-of-rooms').textContent = renameRooms(addDataInTemplate('.popup__text--capacity', ad.offer.rooms, adElement));
  adElement.querySelector('.number-of-guests').textContent = renameGuests(addDataInTemplate('.popup__text--capacity', ad.offer.guests, adElement));

  adElement.querySelector('.time-checkin').textContent = addDataInTemplate('.popup__text--time', ad.offer.checkin, adElement);
  adElement.querySelector('.time-checkout').textContent = addDataInTemplate('.popup__text--time', ad.offer.checkout, adElement);

  adElement.querySelector('.popup__description').textContent = addDataInTemplate('.popup__description', ad.offer.description, adElement);
  showImages(ad.offer.photos, adElement);

  adElement.querySelectorAll('.popup__feature').forEach((element) => {
    element.style.display = 'none';
  })
  ad.offer.features.forEach((item) => {
    adElement.querySelector(`.popup__feature--${item}`).style.display = 'inline-block';
  })

  mapCanvas.appendChild(adElement);
};

export { render };
