import formValidation from 'FormValidation';

class LoginForm {
    constructor() {
        this.form = document.querySelector('#form');
        this.firstName = this.form.querySelector('#firstName').value;
        this.secondName = this.form.querySelector('#secondName').value;
        this.email = this.form.querySelector('#email').value;
        this.phone = this.form.querySelector('#phone').value;
        this.age = this.form.querySelector('#age').value;
        this.messageZone = this.form.getElementsById('message');
        document.getElementsById('#submit').addEvantListener('submit', this.onSubmit.bind(this));
    }

    setMassage(message) {
        this.messageZone.innerHTML = message;
    }

    checkValidData(data, nameData) {
        if (!data) {
            message = 'Your' +  nameData + 'not valid.';
            this.setMassage(message);
        }
    }

    isValidFirstName(name) {
        formValidation.setFirstName(name);
        firstNameValid = formValidation.validateName(name);
        this.checkValidData(firstNameValid, 'first name');
    }

    isValidSecondName(name) {
        formValidation.setFirstName(name);
        secondNameValid = formValidation.validateName(name);
        this.checkValidData(firstNameValid, 'second name');
    }

    isValidEmail(email) {
        formValidation.setEmail(email);
        emailValid = formValidation.valideteEmail();
        this.checkValidData(emailValid, 'email');
    }

    isValidPhone(phone) {
        formValidation.setPhone(phone);
        phoneValid = formValidation.isValidPhone();
        this.checkValidData(phoneValid, 'phone');
    }

    isValidAge(age) {
        formValidation.setAge(age);
        ageValid = formValidation.isValidAge();
        this.checkValidData(ageValid, 'age');
    }

    onSubmit() {
        event.preventDefault();
        this.isValidFirstName(this.firstName);
        this.isValidSecondName(this.secondName);
        this.isValidPhone(this.phone);
        this.isValidEmail(this.email);
        this.isValidAge(this.age);
    }
}
