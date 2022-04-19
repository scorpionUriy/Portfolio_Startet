const scrollContainer = document.querySelector('main');
let scrollRight = 12.4
if (window.matchMedia('(max-width: 1200px)').matches) {
  scrollRight = 2; 
}

scrollContainer.addEventListener('wheel', (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY * scrollRight;
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.nav-list__item-link').forEach((link) => {
          if (link.getAttribute('href').replace('#', '') === entry.target.id) {
            link.classList.add('nav-list__item-link--active');
          } else {
            link.classList.remove('nav-list__item-link--active');
          }
        });
      }
    });
  },
  {
    threshold: 0.7,
  }
);

document
  .querySelectorAll('.section')
  .forEach((section) => observer.observe(section));




let position = 0;
let slidesToShow = 3;
if (window.matchMedia('(max-width: 1200px)').matches) {
  slidesToShow = 2;
}
if (window.matchMedia('(max-width: 576px)').matches) {
  slidesToShow = 1; 
}
console.log(slidesToShow);
const slidesToScroll = 1;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const btnPrew = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const items = document.querySelectorAll('.slider-item');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;



items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
});



btnNext.addEventListener('click', () => {
  const itemsLeft =
    itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

  position -=
    itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
});

btnPrew.addEventListener('click', () => {
  const itemsLeft = Math.abs(position) / itemWidth;

  position +=
    itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
});

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
  btnPrew.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};



checkBtns();




const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay'),
      menuLink = document.querySelector('.menu__list')

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuLink.addEventListener('click', () => {
    menu.classList.remove('active');
});