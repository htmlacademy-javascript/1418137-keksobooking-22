const inputTypeHouse = document.querySelector('#type');
const inputPrice = document.querySelector('#price');

const formTime = document.querySelector('.ad-form__element--time');
const inputsTime = formTime.querySelectorAll('select');

const priceTypeHouse = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

inputTypeHouse.addEventListener('click', function () {
  inputPrice.placeholder = priceTypeHouse[inputTypeHouse.value];
  inputPrice.min = priceTypeHouse[inputTypeHouse.value];
});

for (let i = 0; i < inputsTime.length; i++) {
  inputsTime[i].addEventListener('click', function () {
    inputsTime.forEach((section) => {
      section.value = inputsTime[i].value;
    })
  });
}
