

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


