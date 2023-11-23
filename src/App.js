import Computer from './Baseball/domain/Computer.js';
import RANDOM_NUMBER from './Baseball/domain/RandomNumber.js';
import INPUT_VIEW from './Baseball/domain/InputView.js';
import OUTPUT_VIEW from './Baseball/domain/OutputView.js';

class App {
  async play() {
    OUTPUT_VIEW.startMessage();
    let reStartNumber = 0;
    while (reStartNumber !== 2) {
      const COMPUTER_NUMBERS = new Computer(RANDOM_NUMBER.create());

      let result = {};
      while (!COMPUTER_NUMBERS.isWin(result)) {
        const USER_NUMBERS = await INPUT_VIEW.user();

        result = COMPUTER_NUMBERS.Validate(USER_NUMBERS);
        OUTPUT_VIEW.printResult(result);
      }

      reStartNumber = Number(await INPUT_VIEW.reStart());
    }
  }
}

const GAME = new App();
GAME.play();

export default App;
