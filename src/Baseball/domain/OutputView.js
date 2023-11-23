import { Console } from '@woowacourse/mission-utils';
import Computer from './Computer.js';

const OUTPUT_VIEW = Object.freeze({
  result(computer, userInput) {
    let ball = computer.ballValidate(userInput);
    let strike = computer.strikeValidate(userInput);
    let nothing = computer.nothingValidate(userInput);

    return { ball, strike, nothing };
  },

  ball(computer, userInput) {
    const RESULT = this.result(computer, userInput);
    if (RESULT['strike'] === 0 && RESULT['nothing'] === 0) {
      Console.print(`${RESULT['ball']}볼`);
    }
  },

  strike(computer, userInput) {
    const RESULT = this.result(computer, userInput);
    if (RESULT['ball'] === 0 && RESULT['nothing'] === 0) {
      Console.print(`${RESULT['strike']}스트라이크`);
    }
  },

  win(computer, userInput) {
    const RESULT = this.result(computer, userInput);
    if (RESULT['strike'] === 3) {
      Console.print(
        `${RESULT['strike']}스트라이크 \n3개의 숫자를 모두 맞히셨습니다! 게임 종료`
      );
    }
  },

  nothing(computer, userInput) {
    const RESULT = this.result(computer, userInput);
    if (RESULT['nothing'] === '낫싱') {
      Console.print(RESULT['nothing']);
    }
  },

  ballAndStrike(computer, userInput) {
    const RESULT = this.result(computer, userInput);
    if (RESULT['ball'] !== 0 && RESULT['strike'] !== 0) {
      Console.print(`${RESULT['ball']}볼 ${RESULT['strike']}스트라이크`);
    }
  },

  allCheck(computer, userInput) {
    this.ball(computer, userInput);
    this.strike(computer, userInput);
    this.nothing(computer, userInput);
    this.ballAndStrike(computer, userInput);
    this.win(computer, userInput);
  },
});

let q = new Computer([1, 2, 3]);
let w = '567';
OUTPUT_VIEW.allCheck(q, w);
