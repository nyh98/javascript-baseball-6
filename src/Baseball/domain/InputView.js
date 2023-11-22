import { Console } from '@woowacourse/mission-utils';

const InputView = Object.freeze({
  async user() {
    const NUMBERS = await Console.readLineAsync();
    return NUMBERS;
  },
});
