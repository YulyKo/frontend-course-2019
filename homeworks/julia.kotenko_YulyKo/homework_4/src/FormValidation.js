import regulars from 'regular.js';

export class FormValidation {
    setFirstName(firstName) {
        this.firstName = firstName;
    }

    setSecondName(secondName) {
        this.secondName = secondName;
    }

    validateName(name) {
        format = this.email.match(regulars.NAME_FORMAT);
        if (name.toString().length >= 1 && name.toString().length <= 20 && format) {
            return true;
        }
        return false;
    }

    setEmail(email) {
        this.email = email;
    }

    validateEmail() {
        format = regulars.MAIL_FORMAT;
        if (this.email.match(format)) {
            return true;
        }
        return false;
    }

    setPhone(phone) {
        this.phone = phone;
    }

    validatePhone() {
        format = regulars.PHONE_FORMAT;
        if (this.phone.match(format)) {
            return true;
        }
        return false;
    }

    setAge(age) {
        this.age = age;
    }

    validateAge() {
        if ('' || (this.age <= 120 && this.age >= 18)) {
            return true;
        }
        return false;
    }
}
