import { Console } from '@woowacourse/mission-utils';
import Computer from './Baseball/domain/Computer.js';
import RandomNumber from './Baseball/domain/RandomNumber.js';

class App {
  async play() {
    const COMPUTER_NUMBERS = new Computer(RandomNumber.create());
  }
}

const GAME = new App();
GAME.play();

export default App;
