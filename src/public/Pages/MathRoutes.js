var Random_Num = /** @class */ (function () {
    function Random_Num() {
    }
    Random_Num.prototype.randNum = function (num1) {
        return Math.floor(Math.random() * num1);
    };
    return Random_Num;
}());
var MathFunctions = /** @class */ (function () {
    function MathFunctions() {
    }
    MathFunctions.prototype.addNumbers = function (num1, num2) {
        return num1 + num2;
    };
    MathFunctions.prototype.subNumbers = function (num1, num2) {
        return num1 + num2;
    };
    MathFunctions.prototype.mulNumbers = function (num1, num2) {
        return num1 * num2;
    };
    MathFunctions.prototype.divNumbers = function (num1, num2) {
        return num1 / num2;
    };
    return MathFunctions;
}());
var elAdd = document.getElementById("addNum");
var elSub = document.getElementById("subNum");
var elMul = document.getElementById("mulNum");
var elDiv = document.getElementById("divNum");
var pro = document.getElementById("problem");
elAdd.addEventListener("click", function (e) {
    var Rand = new Random_Num();
    var number_1 = Rand.randNum(5);
    var number_2 = Rand.randNum(10);
    var funcs = new MathFunctions();
    var addFunction = funcs.addNumbers(number_1, number_2);
    pro.textContent = "".concat(number_1, " + ").concat(number_2, " = ").concat(addFunction);
    e.preventDefault();
});
elSub.addEventListener("click", function (e) {
    var Rand = new Random_Num();
    var number_1 = Rand.randNum(5);
    var number_2 = Rand.randNum(10);
    var funcs = new MathFunctions();
    var subFunction = funcs.subNumbers(number_1, number_2);
    pro.textContent = "".concat(number_1, " - ").concat(number_2, " = ").concat(subFunction);
    e.preventDefault();
});
elMul.addEventListener("click", function (e) {
    var Rand = new Random_Num();
    var number_1 = Rand.randNum(5);
    var number_2 = Rand.randNum(10);
    var funcs = new MathFunctions();
    var mulFunction = funcs.mulNumbers(number_1, number_2);
    pro.textContent = "".concat(number_1, " * ").concat(number_2, " = ").concat(mulFunction);
    e.preventDefault();
});
elDiv.addEventListener("click", function (e) {
    var Rand = new Random_Num();
    var number_1 = Rand.randNum(5);
    var number_2 = Rand.randNum(10);
    var funcs = new MathFunctions();
    var divFunction = funcs.divNumbers(number_1, number_2);
    pro.textContent = "".concat(number_1, " / ").concat(number_2, " = ").concat(divFunction);
    e.preventDefault();
});
