var throttle = require('lodash.throttle');

const refs = {
    form: document.querySelector('.feedback-form'),
    inputEl: document.querySelector('input'),
    textEl: document.querySelector('textarea'),
}

refs.form.addEventListener('submit', formSubmit);
refs.form.addEventListener('input', throttle(userInput, 500));

function formSubmit(event) {
    event.preventDefault();
    if (refs.inputEl.value && refs.textEl.value) {
        const userInfo = { email: `${refs.inputEl.value}`, message: `${refs.textEl.value}` };
        console.log(userInfo);
        event.target.reset();
        localStorage.removeItem('feedback-form-state');
    }
}

function userInput() {
    const userInfo = { email: `${refs.inputEl.value}`, message: `${refs.textEl.value}`};
    localStorage.setItem('feedback-form-state', JSON.stringify(userInfo));
    console.log(refs.textEl.value)
}

function examinationStorage() {
    const storageMessage = localStorage.getItem('feedback-form-state');
    const feedbackMessage = JSON.parse(storageMessage);
    if (storageMessage) {
        refs.inputEl.value = `${feedbackMessage.email}`;
        refs.textEl.value = `${feedbackMessage.message}`;
    }
}
examinationStorage();
