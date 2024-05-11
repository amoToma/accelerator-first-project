const header = document.querySelector('.header');
const burger = header.querySelector('.burger');
const menu = header.querySelector('.header__navigation');
const menuLinks = Array.from(header.querySelectorAll('.navigation__link'));
const body = document.querySelector('body');

const hideOverlay = () => {
  header.classList.remove('header__overlay');
};

const disabledScroll = () => {
  body.style.overflow = 'hidden';
};

const enabledScroll = () => {
  body.style.overflow = '';
};

const closeMenu = () => {
  if (menu.classList.contains('header__navigation--open')) {
    menu.classList.remove('header__navigation--open');
    burger.classList.remove('burger--open');
    enabledScroll();
    hideOverlay();
  }
};

const openMenu = () => {
  burger.classList.toggle('burger--open');
  menu.classList.toggle('header__navigation--open');
  header.classList.toggle('header__overlay');
  menuLinks.forEach((item) => {
    item.addEventListener('click', closeMenu);
  });
};

const onClickButton = () => {
  openMenu();

  if (menu.classList.contains('header__navigation--open')) {
    disabledScroll();
  } else {
    enabledScroll();
  }
};

const initMenu = () => {
  burger.addEventListener('click', onClickButton);
};

export { initMenu };
