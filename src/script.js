

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const servicesToggle = document.getElementById('mobile-services');
const servicesDropdown = document.getElementById('mobile-services-dropdown');
const workToggle = document.getElementById('mobile-work');
const workDropdown = document.getElementById('mobile-work-dropdown');

menuToggle.addEventListener('click', function () {
  mobileMenu.classList.toggle('-translate-x-full');
  servicesDropdown.classList.add('hidden'); // Hide services dropdown when menu is toggled
  workDropdown.classList.add('hidden'); // Hide work dropdown when menu is toggled
});

servicesToggle.addEventListener('click', function (e) {
  e.preventDefault();
  servicesDropdown.classList.toggle('hidden'); // Toggle services dropdown visibility
  workDropdown.classList.add('hidden'); // Hide work dropdown if it's open
});

workToggle.addEventListener('click', function (e) {
  e.preventDefault();
  workDropdown.classList.toggle('hidden'); // Toggle work dropdown visibility
  servicesDropdown.classList.add('hidden'); // Hide services dropdown if it's open
});




let appendNumber = 20;
let prependNumber = 1;
const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 30,
 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  virtual: {
    slides: (function () {
      const slides = [];
      for (var i = 0; i < 20; i += 1) {
        slides.push('Slide ' + (i + 1));
      }
      return slides;
    })(),
  },
});

document
  .querySelector('.slide-1')
  .addEventListener('click', function (e) {
    e.preventDefault();
    swiper.slideTo(0, 0);
  });


document
  .querySelector('.append-slide')
  .addEventListener('click', function (e) {
    e.preventDefault();
    swiper.virtual.appendSlide('Slide ' + ++appendNumber);
  });