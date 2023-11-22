import MESSAGES from './Messages.js';

const ERROR_LIST = Object.freeze({
  notNumber(userInput) {
    const NON_DIGIT_PATTERN = /\D/g;
    if (NON_DIGIT_PATTERN.test(userInput)) {
      throw new Error(MESSAGES.Numbererror);
    }
  },
});

export default ERROR_LIST;
