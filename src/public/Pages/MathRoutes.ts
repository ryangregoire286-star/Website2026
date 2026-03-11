import { exit } from "process";

interface IRand {
  randNum: (num1: number) => number;
}

class Random_Num implements IRand {
  randNum(num1: number) {
    return Math.floor(Math.random() * num1);
  }
}

interface IMath {
  addNumbers: (num1: number, num2: number) => number;
  subNumbers: (num1: number, num2: number) => number;
  mulNumbers: (num1: number, num2: number) => number;
  divNumbers: (num1: number, num2: number) => number;
}
class MathFunctions implements IMath {
  public addNumbers(num1: number, num2: number) {
    return num1 + num2;
  }

  public subNumbers(num1: number, num2: number) {
    return num1 + num2;
  }

  public mulNumbers(num1: number, num2: number) {
    return num1 * num2;
  }

  public divNumbers(num1: number, num2: number): number {
    if (num2 === 0) {
      console.log("Cannot Divide by Zero");
      exit(0);
    }

    return num1 / num2;
  }
}

const elAdd = document.getElementById("addNum") as HTMLElement;
const elSub = document.getElementById("subNum") as HTMLElement;
const elMul = document.getElementById("mulNum") as HTMLElement;
const elDiv = document.getElementById("divNum") as HTMLElement;
const pro = document.getElementById("problem") as HTMLElement;

elAdd.addEventListener("click", (e) => {
  const Rand = new Random_Num();
  const number_1 = Rand.randNum(5);
  const number_2 = Rand.randNum(10);

  const funcs = new MathFunctions();
  const addFunction = funcs.addNumbers(number_1, number_2);

  pro.textContent = `${number_1} + ${number_2} = ${addFunction}`;
  e.preventDefault();
});

elSub.addEventListener("click", (e) => {
  const Rand = new Random_Num();
  const number_1 = Rand.randNum(5);
  const number_2 = Rand.randNum(10);

  const funcs = new MathFunctions();
  const subFunction = funcs.subNumbers(number_1, number_2);

  pro.textContent = `${number_1} - ${number_2} = ${subFunction}`;
  e.preventDefault();
});

elMul.addEventListener("click", (e) => {
  const Rand = new Random_Num();
  const number_1 = Rand.randNum(5);
  const number_2 = Rand.randNum(10);

  const funcs = new MathFunctions();

  const mulFunction = funcs.mulNumbers(number_1, number_2);

  pro.textContent = `${number_1} * ${number_2} = ${mulFunction}`;
  e.preventDefault();
});

elDiv.addEventListener("click", (e) => {
  const Rand = new Random_Num();
  const number_1 = Rand.randNum(5);
  const number_2 = Rand.randNum(10);

  const funcs = new MathFunctions();
  const divFunction = funcs.divNumbers(number_1, number_2);

  pro.textContent = `${number_1} / ${number_2} = ${divFunction}`;
  e.preventDefault();
});
