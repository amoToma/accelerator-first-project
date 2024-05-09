const form = document.querySelector('.form');
const inputs = Array.from(form.querySelectorAll('.form__input'));
const buttonForm = form.querySelector('.form__button');

const showInvalidInput = (item) => {
  item.classList.add('form__input--error');
};

const hideInvalidInput = (item) => {
  item.classList.remove('form__input--error');
};

const testedValid = () => {
  inputs.forEach((item) => {
    const inputValid = item.checkValidity();

    if (!inputValid) {
      showInvalidInput(item);
    }

    item.addEventListener('input', () => {
      hideInvalidInput(item);
    });
  });
};

buttonForm.addEventListener('click', testedValid);
