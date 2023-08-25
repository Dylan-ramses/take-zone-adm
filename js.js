const menuOpen = document.querySelector('.menu-active');
const gridMenu = document.querySelector('.grid-menu');

gridMenu.addEventListener('click',toggleMenu);

function toggleMenu(){
  menuOpen.classList.toggle ('inactive')
}
