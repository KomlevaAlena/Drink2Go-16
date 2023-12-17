/* в этот файл добавляет скрипты*/
const rangeSliderInit = () => {
  const sliderElement = document.querySelector('.range-slider');
  const inputMin = document.getElementById('min');
  const inputMax = document.getElementById('max');

  const inputs = [inputMin, inputMax];

  noUiSlider.create(sliderElement, { // инициализируем слайдер
    start: [0, 900], // устанавливаем начальные значения
    connect: true, // указываем что нужно показывать выбранный диапазон
    range: { // устанавливаем минимальное и максимальное значения
      'min': 0,
      'max': 1000
    },
    step: 1, // шаг изменения значений
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  }
  );

  sliderElement.noUiSlider.on('update', function (values, handle) { // при изменений положения элементов управления слайдера изменяем соответствующие значения
    inputs[handle].value = parseInt(values[handle]);
  });

  inputMin.addEventListener('change', function () {
  });

  inputMax.addEventListener('change', function () {
    sliderElement.noUiSlider.set([null, this.value]);
  });
};
const init = () => {
  rangeSliderInit();
};

window.addEventListener('DOMContentLoaded', init);
