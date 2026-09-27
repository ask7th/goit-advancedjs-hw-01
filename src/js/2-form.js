const form = document.querySelector('.feedback-form');
const formData = { email: '', message: '' };
const localStorageKey = 'feedback-form-state';
const data = localStorage.getItem(localStorageKey);

if (data) {
  const parsedData = JSON.parse(data);

  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert(`All form fields must be filled in`);
    return;
  }

  console.log(formData);

  localStorage.removeItem(localStorageKey);

  formData.email = '';
  formData.message = '';

  form.reset();
});
