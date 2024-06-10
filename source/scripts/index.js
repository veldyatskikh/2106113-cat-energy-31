/* в этот файл  добавляет скрипты*/

/* мобильное меню*/
document.querySelector('.main-nav__list').classList.add('main-nav__list--close');
document.querySelector('.main-nav__toggle').classList.add('main-nav__toggle--open');
const e = document.querySelector('.main-nav__list'),
  n = document.querySelector('.main-nav__toggle');
n.addEventListener('click', ()=>{
  e.classList.toggle('main-nav__list--open');
  n.classList.toggle('main-nav__toggle--close');

}
);
