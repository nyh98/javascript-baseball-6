import MESSAGES from './Messages.js';
import { Console } from '@woowacourse/mission-utils';

const ERROR_LIST = Object.freeze({
  invalidFormat(userInput) {
    const NON_DIGIT_PATTERN = /\D/g;
    if (NON_DIGIT_PATTERN.test(userInput)) {
      throw new Error(MESSAGES.invalidFormatError);
    }
  },

  overNumbers(userInput) {
    if (userInput.length !== 3) {
      throw new Error(MESSAGES.overNumbersError);
    }
  },

  repeatedNUmber(userInput) {
    if (new Set(userInput).size !== userInput.length) {
      throw new Error(MESSAGES.repeatedNumberError);
    }
  },

  allCheck(userInput) {
    this.invalidFormat(userInput);
    this.overNumbers(userInput);
    this.repeatedNUmber(userInput);
  },
});

export default ERROR_LIST;
