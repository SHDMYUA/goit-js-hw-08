import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state"; //key for identification feedback form
const formData = {}; // object for local-storage

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form  textarea'),
};

//follow submit and throttle
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormAreaInput, 500));

//follow the whole form
function onFormAreaInput(evt){
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  console.log(localStorage);
}

//clear form after submit

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('form sent');
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

//compare localStorage and pass value

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
const parseSavedMessage = JSON.parse(savedMessage);
    refs.input.value = parseSavedMessage.email;
    refs.textarea.value = parseSavedMessage.message;
  }
}

populateTextarea();