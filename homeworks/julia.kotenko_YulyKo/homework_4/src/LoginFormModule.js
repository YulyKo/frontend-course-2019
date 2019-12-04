import { isValid } from './isValid';

let MESSAGE = '';

export function cleanMessage() {
    MESSAGE = '';
}

export function getMessage() {
    return MESSAGE;
}

export function setMessageErrorOfValid(data) {
    MESSAGE += `Your ${data} not valid.\n`;
}

export function isValidName(name, minLength, maxLength, regular) {
    const min = isValid.minLength(name, minLength);
    const max = isValid.maxLength(maxLength);
    const pattern = isValid.pattern(name, regular);
    if ((!min === !max) || !pattern) {
        setMessageErrorOfValid(name);
        console.log(false);
        return false;
    }
    console.log(true);
    return true;
}

export function isValidEmail(email) {
    if (!isValid.email(email)) {
        setMessageErrorOfValid('email');
        return false;
    }
    return true;
}

export function isValidPhone(phone) {
    if (!isValid.phone(phone)) {
        setMessageErrorOfValid(false, 'phone');
        return false;
    }
    return true;
}

export function isValidAge(age) {
    return isValid.numberRange(age, 18, 120);
}
