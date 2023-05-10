import throttle from 'lodash.throttle';
const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('[name="email"]');
const messageInput = feedbackForm.querySelector('[name="message"]');

const saveFormState = throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
  console.log(formState);
}, 500);

feedbackForm.addEventListener('input', saveFormState);

document.addEventListener('DOMContentLoaded', () => {
  const storedFormState = localStorage.getItem('feedback-form-state');
  if (storedFormState) {
    const formState = JSON.parse(storedFormState);
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
  console.log(formState);
});
