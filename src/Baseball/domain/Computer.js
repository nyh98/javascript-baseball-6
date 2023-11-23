class Computer {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  Validate(userInput) {
    let ball = 0;
    let strike = 0;
    this.#numbers.forEach((number, index) => {
      const indexof = userInput.indexOf(number);
      if (indexof === index) {
        strike += 1;
      }
      if (indexof !== index && indexof !== -1) {
        ball += 1;
      }
    });
    return { ball, strike };
  }

  isWin(result) {
    return result.strike === 3;
  }
}

export default Computer;
