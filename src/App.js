import { Console } from '@woowacourse/mission-utils';
import Computer from './Baseball/domain/Computer.js';
import RANDOM_NUMBER from './Baseball/domain/RandomNumber.js';
import INPUT_VIEW from './Baseball/domain/InputView.js';

class App {
  async play() {
    const COMPUTER_NUMBERS = new Computer(RANDOM_NUMBER.create());

    const USER_NUMBERS = await INPUT_VIEW.user();
  }
}

const GAME = new App();
GAME.play();

export default App;
