const inputTypeHouse = document.querySelector('#type');
const inputPrice = document.querySelector('#price');
const inputTitle = document.querySelector('#title');

const formTime = document.querySelector('.ad-form__element--time');
const inputsTime = formTime.querySelectorAll('select');

const priceTypeHouse = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

inputTitle.addEventListener('input', () => {
  inputTitle.min = MIN_TITLE_LENGTH;
  inputTitle.max = MAX_TITLE_LENGTH;

  const valueLength = inputTitle.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    inputTitle.setCustomValidity('Ещё ' + (MIN_TITLE_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_TITLE_LENGTH) {
    inputTitle.setCustomValidity('Удалите лишние ' + (valueLength - MAX_TITLE_LENGTH) + ' симв.');
  } else {
    inputTitle.setCustomValidity('');
  }

  inputTitle.reportValidity();
})

inputTypeHouse.addEventListener('change', () => {
  inputPrice.placeholder = priceTypeHouse[inputTypeHouse.value];
  inputPrice.min = priceTypeHouse[inputTypeHouse.value];
  inputPrice.max = 1000000;
});

inputPrice.addEventListener('input', () => {
  inputPrice.placeholder = priceTypeHouse[inputTypeHouse.value];
  inputPrice.min = priceTypeHouse[inputTypeHouse.value];
  inputPrice.max = 1000000;
});

for (let i = 0; i < inputsTime.length; i++) {
  inputsTime[i].addEventListener('click', () => {
    inputsTime.forEach((section) => {
      section.value = inputsTime[i].value;
    })
  });
}



const inputRoomNumber = document.querySelector('#room_number');
const inputCapacity = document.querySelector('#capacity');

/*Можно при выборе количества комнат добавить блокировку недопустимых вариантов выбора количества гостей*/

// const inputRoomNumberFields = inputRoomNumber.querySelectorAll('option');
// const inputCapacityFields = inputCapacity.querySelectorAll('option');

// inputRoomNumber.addEventListener('click', () => {
//   for (let i = 0; i < inputCapacityFields.length; i++) {
//     inputCapacityFields[i].setAttribute('disabled', 'disabled');
//   }
//   if (inputRoomNumber.value < 100) {
//     for (let i = inputCapacityFields.length - 2; i >= (inputCapacityFields.length - 1) - inputRoomNumber.value; i--) {
//       inputCapacityFields[i].removeAttribute('disabled');
//     }
//   }
//   if (inputRoomNumber.value >= 100) {
//     inputCapacityFields[inputCapacityFields.length - 1].removeAttribute('disabled');
//   }
// });

// inputCapacity.addEventListener('click', () => {
//   for (let i = 0; i < inputCapacityFields.length; i++) {
//     inputCapacityFields[i].setAttribute('disabled', 'disabled');
//   }
//   if (inputRoomNumber.value < 100) {
//     for (let i = inputCapacityFields.length - 2; i >= (inputCapacityFields.length - 1) - inputRoomNumber.value; i--) {
//       inputCapacityFields[i].removeAttribute('disabled');
//     }
//   }
//   if (inputRoomNumber.value >= 100) {
//     inputCapacityFields[inputCapacityFields.length - 1].removeAttribute('disabled');
//   }
// });

inputRoomNumber.addEventListener('click', () => {
  const room = inputRoomNumber.value;
  const guest = inputCapacity.value

  if (room >= 100 && guest > 0) {
    inputCapacity.setCustomValidity('Измените количество гостей или комнат');
  } else if (room < 100 && guest == 0) {
    inputCapacity.setCustomValidity('Выберите количество гостей');
  } else if (room < guest && guest < 100) {
    inputCapacity.setCustomValidity('Измените количество гостей или комнат');
  } else {
    inputCapacity.setCustomValidity('');
  }
});

inputCapacity.addEventListener('click', () => {
  const room = inputRoomNumber.value;
  const guest = inputCapacity.value

  if (room < 100 && guest > 0 && room >= guest) {
    inputCapacity.setCustomValidity('');
  } else if (room >= 100 && guest == 0) {
    inputCapacity.setCustomValidity('');
  }

  if (room >= 100 && guest > 0) {
    inputCapacity.setCustomValidity('Измените количество гостей или комнат');
  } else if (room < 100 && guest == 0) {
    inputCapacity.setCustomValidity('Выберите количество гостей или комнат');
  } else if (room < guest && guest < 100) {
    inputCapacity.setCustomValidity('Измените количество гостей или комнат');
  }

});
