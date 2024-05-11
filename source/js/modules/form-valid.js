const form = document.querySelector('.form');
//const inputs = Array.from(form.querySelectorAll('.form__input'));
const buttonForm = form.querySelector('.form__button');
const inputPhone = form.querySelector('.form__input--phone');
const inputEmail = form.querySelector('.form__input--email');

const showInvalidInput = (item) => {
  item.classList.add('form__input--error');
};

const hideInvalidInput = (item) => {
  item.classList.remove('form__input--error');
};

const testedValid = (input, errorText) => {
  const isValid = input.checkValidity();


  if (!isValid && input.value.length === 0) {
    showInvalidInput(input);
  }

  if (!isValid && input.value.length > 0) {
    showInvalidInput(input);
    input.setCustomValidity(errorText);
  }

  input.addEventListener('input', () => {
    hideInvalidInput(input);
    input.setCustomValidity('');
  });
};

const onButtonSubmitClick = () => {
  testedValid(inputPhone, 'Используйте только цифры');
  testedValid(inputEmail, 'Email должен содержать "@"');
};
//       inputPhone.setCustomValidity('Используйте только цифры');
//     }
//     // else {
//     //   inputPhone.setCustomValidity('');
//     // }
//     inputPhone.addEventListener('input', () => {
//       hideInvalidInput(inputPhone);
//     });
//   });

//   inputEmail.addEventListener('input', () => {

//     if (!inputEmail.checkValidity()) {
//       showInvalidInput(inputEmail);
//       inputEmail.setCustomValidity('Email должен содержать "@"');
//     }
//     // else {
//     //   inputEmail.setCustomValidity('');
//     // }
//     inputEmail.addEventListener('input', () => {
//       hideInvalidInput(inputEmail);
//     });
//   });
// };

buttonForm.addEventListener('click', onButtonSubmitClick);

// const testedValid = () => {
//   inputs.forEach((item) => {
//     const inputValid = item.checkValidity();





//     if (!inputValid && item.value.length === 0) {
//       showInvalidInput(item);
//     }

//     if (!inputValid && item.classList.contains('form__input--email') && item.value.length > 0) {
//       showInvalidInput(item);
//       item.setCustomValidity('Email должен содержать "@"');
//     }




//     if (!inputValid && item.classList.contains('form__input--phone') && item.value.length > 0) {
//       showInvalidInput(item);
//       item.setCustomValidity('Используйте только цифры');
//     }





//     item.addEventListener('input', () => {
//       hideInvalidInput(item);
//       item.setCustomValidity('');
//     });
//   });
// };

// buttonForm.addEventListener('click', testedValid);





// const onButtonSubmitClick = () => {
//   inputs.forEach((item) => {
//     const inputValid = item.checkValidity();

//     if (!inputValid) {
//       showInvalidInput(item);
//     }

//     item.addEventListener('input', () => {
//       hideInvalidInput(item);
//     });
//   });
// };

// buttonForm.addEventListener('click', onButtonSubmitClick);
