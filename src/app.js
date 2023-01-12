import { createModal, isValid } from './utils';
import { Question } from './question'; 
import './styles.css';


const form = document.getElementById('form');
const input = form.querySelector('#question-input');
const submitBtn = form.querySelector('#submit');
const modalBtn = form.getElementById('modal-btn');

window.addEventListener('load', Question.renderList);
form.addEventListener('submit', submitFormHandler);
modalBtn.addEventListener('click', openModal);
input.addEventListener('input', () => {
  submitBtn.disabled = !isValid(input.value);
});

function submitFormHandler(event) {
  event.preventDefault();

  if (isValid(input.value)) {
    const question = {
        text: input.value.trim(),
        date: new Date().toJSON(),
    }

    submitBtn.disabled = true;
    Question.create(question).then(() => {
      input.value = '';
      input.className = '';
      submitBtn.disabled = false;
    });
  } 
}

function openModal () {
  createModal('Авторизація', '<h1>Test</h1>');
}