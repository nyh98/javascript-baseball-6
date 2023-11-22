import { Random } from '@woowacourse/mission-utils';

const RANDOM_NUMBER = Object.freeze({
  create() {
    const REPOSITORY = [];

    while (REPOSITORY.length < 3) {
      const NUMBER = Random.pickNumberInRange(1, 9);
      if (!REPOSITORY.includes(NUMBER)) {
        REPOSITORY.push(NUMBER);
      }
    }
    return REPOSITORY;
  },
});

export default RANDOM_NUMBER;
