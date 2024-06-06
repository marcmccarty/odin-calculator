let operand1 = 0;
let operand2 = 0;
let operator = "";

function operate(num1, num2, operator) {
    if (operator == "add") {
        add(num1, num2);
    } else if (operator == "subtract") {
        subtract(num1, num2);
    } else if (operator == "multiply") {
        multiply(num1, num2);
    } else if (operator == "divide") {
        divide(num1, num2);
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a -b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}