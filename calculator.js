let operand1 = 0;
let operand2 = 0;
let operator = "";
const MAX_DISPLAY_POSITIVE = 9999999999;
const MAX_DISPLAY_NEGATIVE = -999999999;
const OVERFLOW = "OVERFLOW!";

const displayElement = document.querySelector(".display");

const buttonCE = document.querySelector("#clear-entry");
const buttonC = document.querySelector("#clear");

const button0 = document.querySelector("#zero");
const button1 = document.querySelector("#one");
const button2 = document.querySelector("#two");
const button3 = document.querySelector("#three");
const button4 = document.querySelector("#four");
const button5 = document.querySelector("#five");
const button6 = document.querySelector("#six");
const button7 = document.querySelector("#seven");
const button8 = document.querySelector("#eight");
const button9 = document.querySelector("#nine");

buttonCE.addEventListener("click", () => pressButton(buttonCE.textContent));
buttonC.addEventListener("click", () => pressButton(buttonC.textContent));

button0.addEventListener("click", () => pressButton(parseInt(button0.textContent)));
button1.addEventListener("click", () => pressButton(parseInt(button1.textContent)));
button2.addEventListener("click", () => pressButton(parseInt(button2.textContent)));
button3.addEventListener("click", () => pressButton(parseInt(button3.textContent)));
button4.addEventListener("click", () => pressButton(parseInt(button4.textContent)));
button5.addEventListener("click", () => pressButton(parseInt(button5.textContent)));
button6.addEventListener("click", () => pressButton(parseInt(button6.textContent)));
button7.addEventListener("click", () => pressButton(parseInt(button7.textContent)));
button8.addEventListener("click", () => pressButton(parseInt(button8.textContent)));
button9.addEventListener("click", () => pressButton(parseInt(button9.textContent)));

function pressButton(buttonValue) {
    if (typeof(buttonValue) == "number") {
        updateDisplay(buttonValue);
    } else if (buttonValue == "equals") {
        operate(operand1, operand2, operator);
    } else if (buttonValue == "CE") {
        displayElement.textContent = 0;
        if (operator == "") {
            operand1 = 0;
        } else {
            operand2 = 0;
        }
    } else if (buttonValue == "C") {
        displayElement.textContent = 0;
        operand1 = 0;
        operand2 = 0;
        operator = "";
    } else {
        operator = buttonValue;
    }
}

function updateDisplay(numberString) {
    if (displayElement.textContent == 0) {
        displayElement.textContent = numberString;
        if (operator == "") {
            operand1 = parseInt(numberString);
        } else {
            operand2 = parseInt(numberString);
        }
    } else if (displayElement.textContent.length < 10) {
        displayElement.textContent += numberString;
        if (operator == "") {
            operand1 = parseInt(displayElement.textContent);
        } else {
            operand2 = parseInt(displayElement.textContent);
        }
    }
}

function operate(num1, num2, operator) {
    if (operator == "add") {
        if (add(num1, num2) <= MAX_DISPLAY_POSITIVE || 
            add(num1, num2) >= MAX_DISPLAY_NEGATIVE) {
            displayElement.textContent = Math.round(add(num1, num2));
        } else {
            displayElement.textContent = OVERFLOW;
        }
    } else if (operator == "subtract") {
        if (subtract(num1, num2) <= MAX_DISPLAY_POSITIVE || 
            subtract(num1, num2) >= MAX_DISPLAY_NEGATIVE) {
            displayElement.textContent = Math.round(subtract(num1, num2));
        } else {
            displayElement.textContent = OVERFLOW;
        }
    } else if (operator == "multiply") {
        if (multiply(num1, num2) <= MAX_DISPLAY_POSITIVE || 
            multiply(num1, num2) >= MAX_DISPLAY_NEGATIVE) {
            displayElement.textContent = Math.round(multiply(num1, num2));
        } else {
            displayElement.textContent = OVERFLOW;
        }
    } else if (operator == "divide") {
        if (divide(num1, num2) <= MAX_DISPLAY_POSITIVE || 
            divide(num1, num2) >= MAX_DISPLAY_NEGATIVE) {
            displayElement.textContent = Math.round(divide(num1, num2));
        } else {
            displayElement.textContent = OVERFLOW;
        }
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