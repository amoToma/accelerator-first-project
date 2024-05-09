const form = document.querySelector('.form');
const inputs = Array.from(form.querySelectorAll('.form__input-container'));

const updateLabel = (input, label) => {
  if (input.value.length > 0) {
    label.style.display = 'none';
  } else {
    label.style.display = 'block';
  }
};

const initLabel = () => {
  inputs.forEach((item) => {
    const inputForm = item.querySelector('.form__input');
    const labelForm = item.querySelector('.form__label');

    inputForm.addEventListener('input', () => {
      updateLabel(inputForm, labelForm);
    });
  });
};

export { initLabel };
