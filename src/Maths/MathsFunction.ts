interface IMath {
  addNumbers: (num1: number, num2: number) => number;
  subNumbers: (num1: number, num2: number) => number;
  mulNumbers: (num1: number, num2: number) => number;
  divNumbers: (num1: number, num2: number) => number;
}

interface IRand {
  randNum: (num1: number) => number;
}

class Random_Num implements IRand {
  randNum(num1: number) {
    return Math.floor(Math.random() * num1);
  }
}

class Functions implements IMath {
  addNumbers(num1: number, num2: number) {
    return num1 + num2;
  }

  subNumbers(num1: number, num2: number) {
    return num1 + num2;
  }

  mulNumbers(num1: number, num2: number) {
    return num1 * num2;
  }

  divNumbers(num1: number, num2: number) {
    return num1 / num2;
  }
}
