let operand1 = 0;
let operand2 = 0;
let operator = "";
const MAX_DISPLAY_POSITIVE = 9999999999;
const MAX_DISPLAY_NEGATIVE = -999999999;
const OVERFLOW = "OVERFLOW!";
let overflowFlag = false;

const displayElement = document.querySelector(".display");

const buttonCE = document.querySelector("#clear-entry");
const buttonC = document.querySelector("#clear");

const buttonDivide = document.querySelector("#divide");
const buttonMultiply = document.querySelector("#multiply");
const buttonSubtract = document.querySelector("#subtract");
const buttonAdd = document.querySelector("#add");

const buttonEquals = document.querySelector("#equals");

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

buttonDivide.addEventListener("click", () => pressButton(buttonDivide.textContent));
buttonMultiply.addEventListener("click", () => pressButton(buttonMultiply.textContent));
buttonSubtract.addEventListener("click", () => pressButton(buttonSubtract.textContent));
buttonAdd.addEventListener("click", () => pressButton(buttonAdd.textContent));

buttonEquals.addEventListener("click", () => pressButton(buttonEquals.textContent));

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
        if (!overflowFlag) {
            updateDisplay(buttonValue);
        }
    } else if (buttonValue == "=") {
        if (!overflowFlag) {
            operand1 = operate(operand1, operand2, operator);
            operand2 = 0;
            operator = "";
        }
    } else if (buttonValue == "CE") {
        displayElement.textContent = 0;
        if (!operator) {
            operand1 = 0;
        } else {
            operand2 = 0;
        }
        overflowFlag = false;
    } else if (buttonValue == "C") {
        displayElement.textContent = 0;
        operand1 = 0;
        operand2 = 0;
        operator = "";
        overflowFlag = false;
    } else if (buttonValue == "+") {
        if (operator) {
            operand1 = operate(operand1, operand2, operator);
            operand2 = 0;
        }
        operator = "add";
    } else if (buttonValue == "-") {
        if (operator) {
            operand1 = operate(operand1, operand2, operator);
            operand2 = 0;
        }
        operator = "subtract";
    } else if (buttonValue == "×") {
        if (operator) {
            operand1 = operate(operand1, operand2, operator);
            operand2 = 0;
        }
        operator = "multiply";
    } else if (buttonValue == "÷") {
        if (operator) {
            operand1 = operate(operand1, operand2, operator);
            operand2 = 0;
        }
        operator = "divide";
    } else {
        operator = buttonValue;
    }
}

function updateDisplay(numberString) {
    if (displayElement.textContent == 0 || (operator != "" && operand2 == 0)) {
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
        if (add(num1, num2) <= MAX_DISPLAY_POSITIVE && 
            add(num1, num2) >= MAX_DISPLAY_NEGATIVE) {
            displayElement.textContent = Math.round(add(num1, num2));
            return Math.round(add(num1, num2));
        } else {
            displayElement.textContent = OVERFLOW;
            overflowFlag = true;
            return 0;
        }
    } else if (operator == "subtract") {
        if (subtract(num1, num2) <= MAX_DISPLAY_POSITIVE && 
            subtract(num1, num2) >= MAX_DISPLAY_NEGATIVE) {
            displayElement.textContent = Math.round(subtract(num1, num2));
            return Math.round(subtract(num1, num2));
        } else {
            displayElement.textContent = OVERFLOW;
            overflowFlag = true;
            return 0;
        }
    } else if (operator == "multiply") {
        if (multiply(num1, num2) <= MAX_DISPLAY_POSITIVE && 
            multiply(num1, num2) >= MAX_DISPLAY_NEGATIVE) {
            displayElement.textContent = Math.round(multiply(num1, num2));
            return Math.round(multiply(num1, num2));
        } else {
            displayElement.textContent = OVERFLOW;
            overflowFlag = true;
            return 0;
        }
    } else if (operator == "divide") {
        if (divide(num1, num2) <= MAX_DISPLAY_POSITIVE && 
            divide(num1, num2) >= MAX_DISPLAY_NEGATIVE) {
            displayElement.textContent = Math.round(divide(num1, num2));
            return Math.round(divide(num1, num2));
        } else {
            displayElement.textContent = OVERFLOW;
            overflowFlag = true;
            return 0;
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