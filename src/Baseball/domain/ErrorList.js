import MESSAGES from './Messages.js';
import { Console } from '@woowacourse/mission-utils';

const ERROR_LIST = Object.freeze({
  notNumber(userInput) {
    const NON_DIGIT_PATTERN = /\D/g;
    if (NON_DIGIT_PATTERN.test(userInput)) {
      throw new Error(MESSAGES.numberError);
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
});

export default ERROR_LIST;
