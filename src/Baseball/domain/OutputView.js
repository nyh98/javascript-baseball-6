import { Console } from '@woowacourse/mission-utils';
import Computer from './Computer.js';

const OUTPUT_VIEW = Object.freeze({
  printResult(RESULT) {
    const STR = [];
    if (RESULT['strike'] === 3)
      return Console.print(
        `${RESULT['strike']}스트라이크 \n3개의 숫자를 모두 맞히셨습니다! 게임 종료`
      );
    if (RESULT['ball'] === 0 && RESULT['strike'] === 0)
      return Console.print(`낫싱`);
    if (RESULT['ball'] > 0) STR.push(`${RESULT['ball']}볼`);
    if (RESULT['strike'] > 0) STR.push(`${RESULT['strike']}스트라이크`);

    Console.print(STR.join(' '));
  },

  startMessage() {
    Console.print('숫자 야구 게임을 시작합니다');
  },
});

export default OUTPUT_VIEW;
