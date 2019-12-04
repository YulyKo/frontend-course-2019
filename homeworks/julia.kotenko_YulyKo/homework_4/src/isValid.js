import * as regulars from './Regulars';

// eslint-disable-next-line import/prefer-default-export
export const isValid = {
    minLength(text, length) { return text.length > length; },
    maxLength(text, length) { return text.length < length; },
    pattern(text, pattern) { return pattern.test(text); },
    email(text) { return this.pattern(text, regulars.EMAIL_FORMAT); },
    phone(text) { return this.pattern(text, regulars.PHONE_FORMAT); },
    numberRange(text, min, max) { return text <= max && text >= min; },
};
