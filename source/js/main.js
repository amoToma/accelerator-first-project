// https://swiperjs.com/get-started#installation

import { initMenu } from './modules/menu.js';
import { initLabel } from './modules/form.js';
import './modules/swiper.js';
import './modules/form-valid.js';

initMenu();
initLabel();

// const form = document.querySelector('.form');
// const inputs = Array.from(form.querySelectorAll('.form__input'));
// const buttonForm = form.querySelector('.form__button');
// //const input = form.querySelector('.form__input');
// const inputPhone = form.querySelector('.form__input--phone');

// form.addEventListener('submit', () => {
//   inputs.forEach((i) => {
//     let validity = i.validity;
//     if (validity.patternMismatch) {
//       i.classList.add('form__input--error');
//     }
//   })

// })


// buttonForm.addEventListener('click', () => {
// input.oninvalid = function(event) {
// 	event.target.setCustomValidity('Username should only contain lowercase letters. e.g. john');
//   event.target.classList.add('form__input--error');
// }
// })





// buttonForm.addEventListener('click', () => {
//   inputs.forEach((item) => {
//   const inputValid = item.checkValidity();

//   if (!inputValid) {
//     item.classList.add('form__input--error');
//   }

//   item.addEventListener('input', () => {
//     item.classList.remove('form__input--error');
//   })
// })
// })





// при отправке формы каждое поле проверить на валидность
// те. на  форму повесить событие addEventListener при котором каждый инпут пропустить через цикл
// и добавить класс если не проходит

// form.addEventListener('submit', (evt) => {
//
//     const isValid = validityCheck();
//     if (!isValid) {
//       i.classList.add('form__input--error');
//
//     }
//   })
// })

// const form = document.querySelector('.form');
// const phoneInput = form.querySelector('.form__input--phone');
// const emailInput = form.querySelector('.form__input--email');
// //const phoneLabel = form.querySelector('.form__label--phone');
// //const emailLabel = form.querySelector('.form__label--email');
// const submitButton = form.querySelector('.form__button');

// const SubmitFormText = {
//   IDLE: 'Отправить',
//   SENDING: 'Отправляю...',
// };

// const validityCheck = (input) => {
//   input.addEventListener('invalid', (evt) => {
//     const isValid = evt.target.checkValidity();

//     if(!isValid && input.value.length > 0) {
//       input.classList.add('form__input--error');
//     } else {
//       input.classList.remove('form__input--error');
//     }
//   });
// };

// const phoneValid = validityCheck(phoneInput);
// const emailValid = validityCheck(emailInput);

// if (form) {
//   form.addEventListener('submit', (evt) => {
//     if (phoneValid && emailValid) {
//       evt.preventDefault();
//       submitButton.textContent = SubmitFormText.IDLE;
//     }
//     submitButton.textContent = SubmitFormText.SENDING;
//     form.submit();
//   });
// }
