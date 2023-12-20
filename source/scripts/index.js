/* в этот файл добавляет скрипты*/
const rangeSliderInit = () => {
  const sliderElement = document.querySelector('.range-slider');
  const inputMin = document.getElementById('min');
  const inputMax = document.getElementById('max');

  const inputs = [inputMin, inputMax];

  noUiSlider.create(sliderElement, {
    start: [0, 900],
    connect: true,
    range: {
      'min': 0,
      'max': 1000
    },
    step: 1,
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

  sliderElement.noUiSlider.on('update', (values, handle) => {
    inputs[handle].value = parseInt(values[handle], 10);
  });
  inputMin.addEventListener('change', function () {
    sliderElement.noUiSlider.set([this.value, null]);
  });
  inputMax.addEventListener('change', function () {
    sliderElement.noUiSlider.set([null, this.value]);
  });
};
const init = () => {
  rangeSliderInit();
};

window.addEventListener('DOMContentLoaded', init);
