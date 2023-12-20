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


const sliderItems = Array.from(document.querySelectorAll('.hero-list__item'));
const sliderPagination = Array.from(document.querySelectorAll('.hero-pagination__button'));
const sliderPrev = document.querySelector('.slider-prev');
const sliderNext = document.querySelector('.slider-next');

sliderNext.addEventListener('click', () => {
  const index = sliderItems.findIndex((item) => item.classList.contains('hero-list__item--active'));
  if (index === sliderItems.length - 1) {
    sliderNext.setAttribute('disabled', 'true');
  } else {
    sliderNext.removeAttribute('disabled');
    sliderPrev.removeAttribute('disabled');
    sliderItems[index].classList.remove('hero-list__item--active');
    sliderItems[index + 1].classList.add('hero-list__item--active');
    sliderPagination[index].classList.remove('hero-pagination__button-active');
    sliderPagination[index + 1].classList.add('hero-pagination__button-active');
  }
});

sliderPrev.addEventListener('click', () => {
  const index = sliderItems.findIndex((item) => item.classList.contains('hero-list__item--active'));
  if (index === 0) {
    sliderPrev.setAttribute('disabled', 'true');
  } else {
    sliderNext.removeAttribute('disabled');
    sliderPrev.removeAttribute('disabled');
    sliderItems[index].classList.remove('hero-list__item--active');
    sliderItems[index - 1].classList.add('hero-list__item--active');
    sliderPagination[index].classList.remove('hero-pagination__button-active');
    sliderPagination[index - 1].classList.add('hero-pagination__button-active');
  }
});

const mobileMenu = document.querySelector('.mobile-nav');
const mobileIcon = document.querySelector('.mobile-nav__icon--close');
const siteList = document.querySelector('.site-list');

mobileMenu.classList.remove('mobile-nav--nojs');
siteList.classList.remove('site-list--nojs');

mobileMenu.addEventListener('click', () => {
  siteList.classList.toggle('site-list--open');
  mobileIcon.classList.toggle('mobile-nav__icon--close');
});
