// let str1 = "(((100+54)-45)/545)*((5454%22)*4545)";

// str1.split('')

// let arrstr1 = ["(", "(", "(", "1", "0", "0", "+", "5", "4", ")", "-", "4", "5", ")", "/", "5", "4", "5", ")", "*", "(", "(", "5", "4", "5", "4", "%", "2", "2", ")", "*", "4", "5", "4", "5", ")"];

// arrstr1.join('')

let arrstr = [];

const data = {
    numbers: [],
    operators: []
};

// let flag = false;

document.addEventListener("DOMContentLoaded", function () {
    let resultInput = document.getElementById("result");

    const buttons = document.querySelectorAll("#calcu input[type='button']");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            handleButtonClick(button.value);
        });
    });

    function handleButtonClick(value) {
        switch (value) {
            case "C":
                resetData();
                display(value);
                break;
            case "=":
                try {
                    processData();
                    display(value);
                } catch (error) {
                    resultInput.value = error;
                    resetData();
                }
                break;
            case "⌫":
                arrstr.pop();
                // processData();
                display(value);
                break;
            case "+":
            case "-":
            case "*":
            case "/":
            case "%":
                arrstr.push(value);
                // processData();
                display(value);
                break;
            default:
                arrstr.push(value);
                // processData();
                display(value);

        }
    }

    function evaluateExpression() {
        let nums = data.numbers;
        let opes = data.operators;
        if ((nums.length < 1) && (opes.length < 1)) {
            alert("Nothing is selected to perform operation");
            return arrstr.join('');
        } else if ((nums.length <= 1) && (opes.length < 1)) {
            alert("Select operator and one more number to perform operation");
            return arrstr.join('');
        } else if ((nums.length < 1) && (opes.length <= 1)) {
            resetData();
            alert("Invalid expression");
            return arrstr.join('');
        } else if ((nums.length <= 1) && (opes.length <= 1)) {
            alert("Select one more number to perform operation");
            return arrstr.join('');
        } else {
            let res = 100;

            resetData();
            arrstr.push(res);
            data.numbers.push(res);
            return arrstr.join('');
        }
    }

    function processData() {
        let str = arrstr.join('');
        data.numbers = [];
        data.operators = [];

        for (let i = 0; i < str.length; i++) {
            const currentChar = str[i];

            if (/[0-9.]/.test(currentChar)) {
                let number = currentChar;
                while ((i + 1 < str.length) && (/[0-9.]/.test(str[i + 1]))) {
                    i++;
                    number += str[i];
                }
                data.numbers.push(parseFloat(number));
            } else {
                data.operators.push(currentChar);
            }
        }
    }

    function resetData() {
        // str = "";

        // if (flag) {
        //     arrstr = [];
        //     arrstr.push(evaluateExpression());
        //     data.numbers = [];
        //     data.operators = [];
        //     data.numbers.push(evaluateExpression());
        // } else {
        arrstr = [];
        data.numbers = [];
        data.operators = [];
        // }
    }

    function display(val) {
        // switch (val) {
        //     case "=":
        //         resultInput.value = evaluateExpression();
        //         break;
        //     // case "C":
        //     // case "⌫":
        //     // case "+":
        //     // case "-":
        //     // case "*":
        //     // case "/":
        //     // case "%":
        //     default:
        //         resultInput.value = arrstr.join('');
        //         // break;
        // }

        if (val == "=") {
            resultInput.value = evaluateExpression();
        } else {
            resultInput.value = arrstr.join('');
        }
    }
});




// document.addEventListener("DOMContentLoaded", function () {
//     const data = {
//         numbers: [],
//         operators: []
//     };

//     function clearResult() {
//         document.getElementById('result').value = '';
//         clearData();
//     }

//     function appendToResult(value) {
//         document.getElementById('result').value += value;
//     }

//     function backspace() {
//         const currentValue = document.getElementById('result').value;
//         document.getElementById('result').value = currentValue.slice(0, -1);
//         clearData();
//     }

//     function calculateResult() {
//         const inputString = document.getElementById('result').value;

//         // Clear previous data
//         clearData();

//         // Regular expression to match numbers and operators
//         const regex = /(\d+(\.\d+)?|[\+\-\*\/\%])/g;

//         // Extract numbers and operators from the string
//         const elements = inputString.match(regex);

//         // Populate numbers and operators arrays
//         elements.forEach(element => {
//             if (/[0-9]/.test(element) || element === '.') {
//                 data.numbers.push(parseFloat(element));
//             } else {
//                 data.operators.push(element);
//             }
//         });

//         // Calculate result based on operator precedence (BODMAS/BIDMAS) rule
//         const operatorsPrecedence = ['%', '*', '/', '+', '-'];

//         operatorsPrecedence.forEach(operator => {
//             while (data.operators.includes(operator)) {
//                 const index = data.operators.indexOf(operator);
//                 const leftOperand = data.numbers[index];
//                 const rightOperand = data.numbers[index + 1];
//                 let result;

//                 switch (operator) {
//                     case '%':
//                         result = (leftOperand / 100) * rightOperand;
//                         break;
//                     case '*':
//                         result = leftOperand * rightOperand;
//                         break;
//                     case '/':
//                         result = leftOperand / rightOperand;
//                         break;
//                     case '+':
//                         result = leftOperand + rightOperand;
//                         break;
//                     case '-':
//                         result = leftOperand - rightOperand;
//                         break;
//                     default:
//                         break;
//                 }

//                 // Update numbers and operators arrays with the result
//                 data.numbers.splice(index, 2, result);
//                 data.operators.splice(index, 1);
//             }
//         });

//         // Display the result
//         document.getElementById('result').value = data.numbers[0];
//     }

//     function clearData() {
//         // Clear data arrays
//         data.numbers = [];
//         data.operators = [];
//     }
// });