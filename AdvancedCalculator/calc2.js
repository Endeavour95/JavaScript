// let str1 = "(((100+54)-45)/9)*((54%22)*4)";

// str1.split('')

// let arrstr1 = ['(', '(', '(', '1', '0', '0', '+', '5', '4', ')', '-', '4', '5', ')', '/', '9', ')', '*', '(', '(', '5', '4', '%', '2', '2', ')', '*', '4', ')'];

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
            // if (data.numbers.length<=1 && data.operators.length<=1) {
            //     if (arrstr.includes("√") && arrstr.indexOf("√") == 0) {
            //         handleButtonClick("=");
            //     }
            // }

            // else {
            handleButtonClick(button.value);
            // }
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
                display(value);
                break;
            case "(":
            case ")":
                break;
            case "%":
                processData()
                if (data.numbers.length == 1 && data.operators.length == 0) {
                    arrstr.push(value);
                    display();


                } else {
                    alert("This operation can be perform with two values only")
                    display();
                }
                break;
            case "√":
                // processData()
                // if (data.numbers.length == 0 && data.operators.length == 0) {
                //     arrstr.push(value);
                //     display();
                // } else {
                //     alert("The operator should be selected before the number as it supports only one operand after it.")
                //     display();
                // }
                // break;
                arrstr.push(value);
                display(value);
                break;
            case "^":
            case "/":
            case "*":
            case "+":
            case "-":
            default:
                processData()
                if (data.numbers.length == 0) {
                    alert("You have to select at least one number before selecting operator");
                    // resetData()
                    // display()
                } else if (condition) {
                    
                }
                arrstr.push(value);
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
            if (arrstr.includes("√")) {
                if (arrstr.indexOf("√") == 0) {
                    let res = Math.sqrt(data.numbers[0])
                    resetData();
                    arrstr.push(res);
                    return arrstr.join('');
                } else {
                    resetData()
                    alert("Invalid expression");
                    return arrstr.join('');
                }
            } else {
                alert("Select one more number to perform operation");
                return arrstr.join('');
            }
        } else {
            let res = 100;

            switch (key) {
                case value:

                    break;

                default:
                    break;
            }


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

    // function rootcalculate() {

    // }

    function resetData() {
        arrstr = [];
        data.numbers = [];
        data.operators = [];
    }

    function display(val) {
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