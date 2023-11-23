import { Console } from '@woowacourse/mission-utils';
import ERROR_LIST from './ErrorList.js';
import MESSAGES from './Messages.js';

const INPUT_VIEW = Object.freeze({
  async user() {
    const NUMBERS = await Console.readLineAsync('숫자를 입력해주세요 :');
    ERROR_LIST.allCheck(NUMBERS);
    return NUMBERS;
  },

  async reStart() {
    const RESTART_NUMBER = await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
    );
    ERROR_LIST.reStartNum(RESTART_NUMBER);
    return RESTART_NUMBER;
  },
});

export default INPUT_VIEW;
