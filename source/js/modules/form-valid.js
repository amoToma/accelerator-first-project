const form = document.querySelector('.form');
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

buttonForm.addEventListener('click', onButtonSubmitClick);
