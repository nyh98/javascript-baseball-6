class Computer {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  ballValidate(userInput) {
    let ball = 0;
    this.#numbers.forEach((element, index) => {
      for (let i = 0; i < userInput.length; i++) {
        if (element === Number(userInput[i]) && index !== i) {
          ball += 1;
        }
      }
    });
    return ball;
  }

  strikeValidate(userInput) {
    let strike = 0;
    this.#numbers.forEach((element, index) => {
      for (let i = 0; i < userInput.length; i++) {
        if (element === Number(userInput[i]) && index === i) {
          strike += 1;
        }
      }
    });
    return strike;
  }

  nothingValidate(userInput) {
    if (
      this.ballValidate(userInput) === 0 &&
      this.strikeValidate(userInput) === 0
    ) {
      let nothing = '낫싱';
      return nothing;
    }
    return 0;
  }
}

export default Computer;
