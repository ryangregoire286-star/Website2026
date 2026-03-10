var Mathf = require("./MathsFunction");
var Random_Num = /** @class */ (function () {
    function Random_Num() {
    }
    Random_Num.prototype.randNum = function (num1) {
        return Math.floor(Math.random() * num1);
    };
    return Random_Num;
}());
var el = document.getElementById("addNum");
var pro = document.getElementById("problem");
el.addEventListener("click", function (e) {
    var Rand = new Random_Num();
    var number_1 = Rand.randNum(5);
    var number_2 = Rand.randNum(10);
    var funcs = new Mathf();
    alert("Hello World");
    var addFunction = funcs.addNumbers(number_1, number_2);
    addFunction.textContent = "".concat(number_1, " + ").concat(number_2, " = ").concat(addFunction);
    e.preventDefault();
});
