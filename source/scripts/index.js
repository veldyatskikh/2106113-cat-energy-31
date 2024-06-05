/* в этот файл добавляет скрипты*/

/* мобильное меню*/
document.querySelector('.main-nav__list').classList.remove('main-nav__list--open');
document.querySelector('.main-nav__toggle').classList.remove('main-nav__toggle--close');
const e = document.querySelector('.main-nav__list'),
  n = document.querySelector('.main-nav__toggle');
n.addEventListener('click', ()=>{
  e.classList.toggle('main-nav__list--open');
  n.classList.toggle('main-nav__toggle--close');
}
);

/* слайдер*/

