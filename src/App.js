import { Console } from '@woowacourse/mission-utils';
import Computer from './Baseball/domain/Computer.js';
import RANDOM_NUMBER from './Baseball/domain/RandomNumber.js';
import INPUT_VIEW from './Baseball/domain/InputView.js';
import OUTPUT_VIEW from './Baseball/domain/OutputView.js';

class App {
  async play() {
    OUTPUT_VIEW.startMessage();
    const COMPUTER_NUMBERS = new Computer(RANDOM_NUMBER.create());

    let strike = 0;
    while (strike !== 3) {
      const USER_NUMBERS = await INPUT_VIEW.user();

      OUTPUT_VIEW.allCheck(COMPUTER_NUMBERS, USER_NUMBERS);
      strike = COMPUTER_NUMBERS.strikeValidate(USER_NUMBERS);
    }
  }
}

const GAME = new App();
GAME.play();

export default App;
