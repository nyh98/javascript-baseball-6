import { Random } from '@woowacourse/mission-utils';

class RandomNumber {
  static create() {
    const REPOSITORY = [];

    while (REPOSITORY.length < 3) {
      const NUMBER = Random.pickNumberInRange(1, 9);
      if (!REPOSITORY.includes(NUMBER)) {
        REPOSITORY.push(NUMBER);
      }
    }
    return REPOSITORY;
  }
}

export default RandomNumber;
