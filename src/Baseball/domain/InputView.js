import { Console } from '@woowacourse/mission-utils';
import ERROR_LIST from './ErrorList.js';
import MESSAGES from './Messages.js';

const INPUT_VIEW = Object.freeze({
  async user() {
    while (true) {
      try {
        const NUMBERS = await Console.readLineAsync('숫자를 입력해주세요 :');
        ERROR_LIST.notNumber(NUMBERS);
        return NUMBERS;
      } catch (error) {
        Console.print(MESSAGES.Numbererror);
      }
    }
  },
});
