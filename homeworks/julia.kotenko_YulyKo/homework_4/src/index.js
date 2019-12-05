import * as loginFormModule from './LoginFormModule';
import * as regulars from './Regulars';

const FORM = document.querySelector('#form');
const FIRST_NAME = FORM.querySelector('#firstName');
const SECOND_NAME = FORM.querySelector('#secondName');
const EMAIL = FORM.querySelector('#email');
const PHONE = FORM.querySelector('#phone');
const AGE = FORM.querySelector('#age');
const MESSAGE_ZONE = FORM.querySelector('#message');

function checkMessage() {
    if (loginFormModule.getMessage() === '') MESSAGE_ZONE.innerText = 'Validation successful!';
    else MESSAGE_ZONE.innerText = 'Error!';
}

function addCheckingClass(valid, element) {
    if (valid === false) {
        element.add('form_input--error');
        element.remove('form_input--success');
    } else {
        element.add('form_input--success');
        element.remove('form_input--error');
    }
}

function checkAllInputs() {
    const firstName = loginFormModule.isValidName(FIRST_NAME.value, 1, 5, regulars.NAME_FORMAT);
    const secondName = loginFormModule.isValidName(SECOND_NAME.value, 2, 20, regulars.NAME_FORMAT);
    const phone = loginFormModule.isValidPhone(PHONE.value);
    const email = loginFormModule.isValidEmail(EMAIL.value);
    const age = loginFormModule.isValidAge(AGE.value);
    addCheckingClass(firstName, FIRST_NAME.classList);
    addCheckingClass(secondName, SECOND_NAME.classList);
    addCheckingClass(phone, PHONE.classList);
    addCheckingClass(email, EMAIL.classList);
    addCheckingClass(age, AGE.classList);
}

function onSubmit(event) {
    event.preventDefault();
    checkAllInputs();
    loginFormModule.isValidAge(AGE);
    checkMessage();
}

FORM.addEventListener('submit', (event) => {
    onSubmit(event);
    loginFormModule.cleanMessage();
});
