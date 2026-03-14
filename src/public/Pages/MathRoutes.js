"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
class Random_Num {
    randNum(num1) {
        return Math.floor(Math.random() * num1);
    }
}
class MathFunctions {
    addNumbers(num1, num2) {
        return num1 + num2;
    }
    subNumbers(num1, num2) {
        return num1 + num2;
    }
    mulNumbers(num1, num2) {
        return num1 * num2;
    }
    divNumbers(num1, num2) {
        if (num2 === 0) {
            console.log("Cannot Divide by Zero");
            (0, process_1.exit)(0);
        }
        return num1 / num2;
    }
}
const elAdd = document.getElementById("addNum");
const elSub = document.getElementById("subNum");
const elMul = document.getElementById("mulNum");
const elDiv = document.getElementById("divNum");
const pro = document.getElementById("problem");
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
