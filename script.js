// константы (ссылки на элементы DOM)
const menu = document.getElementById('menu')
const topnav = document.getElementById('myTopnav')
// вешаем листенер на элемент DOM
menu.addEventListener('click', toogleMenu)
// функкция переключения активности меню
function toogleMenu() {
  topnav.classList.toggle('responsive')
}