const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  if (mobileMenu.classList.contains('-translate-x-full')) {
    mobileMenu.classList.remove('-translate-x-full');
  } else {
    mobileMenu.classList.add('-translate-x-full');
  }
});