function functionalCalculator([a, b, op]) {
    [a, b] = [a, b].map(Number);

    let calc = function(a, b, op) { return op(a, b); };

    let add = function (a, b) { return a + b; };
    let subtract = function (a, b) { return a - b; };
    let multiply = function (a, b) { return a * b; };
    let divide = function (a, b) { return a / b; };

    switch (op) {
        case '+': return calc(a, b, add);
        case '-': return calc(a, b, subtract);
        case '*': return calc(a, b, multiply);
        case '/': return calc(a, b, divide);
    }
}

// function calculator(num1, num2, operator) {

//     let result = 0;

//     switch (operator){
//         case '+': result = sumNums(num1, num2); break;
//         case '-': result = subtractNums(num1, num2); break;
//         case '*': result = multiplyNums(num1, num2); break;
//         case '/': result = devideNums(num1, num2); break;
//         default: break;
//     }

//     return result;

//     function sumNums(operand1, operand2) {
//         return operand1 + operand2;
//     }

//     function subtractNums(operand1, operand2) {
//         return operand1-operand2;
//     }

//     function multiplyNums(operand1, operand2) {
//         return operand1*operand2;
//     }

//     function devideNums(operand1, operand2) {
//         return operand1/operand2;
//     }
// }