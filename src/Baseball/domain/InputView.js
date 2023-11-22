import { Console } from '@woowacourse/mission-utils';
import ERROR_LIST from './ErrorList.js';
import MESSAGES from './Messages.js';

const INPUT_VIEW = Object.freeze({
  async user() {
    const NUMBERS = await Console.readLineAsync('숫자를 입력해주세요 :');
    ERROR_LIST.notNumber(NUMBERS);
    ERROR_LIST.overNumbers(NUMBERS);
    return NUMBERS;
  },
});

export default INPUT_VIEW;
