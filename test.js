// let data1 = {
//     numbers: {
//       '1': 100,
//       '2': 54,
//       '3': 45,
//       '4': 545,
//       '5': 5454,
//       '6': 22,
//       '7': 4545
//     },
//     operators: { '1': '+', '2': '-', '3': '/', '4': '*', '5': '%', '6': '*' }
//   }


// let str = "100+54-45/545*5454%22*4545";

// const data = {
//     numbers: {},
//     operators: {}
// };

// // Regular expression to match numbers and operators
// const regex = /(\d+(\.\d+)?|[\+\-\*\/\%])/g;

// // Extract numbers and operators from the string
// const elements = str.match(regex);

// // Initialize counters
// let numberCounter = 1;
// let operatorCounter = 1;

// // Iterate through the elements and store them in the data object
// elements.forEach(element => {
//     if (/[0-9]/.test(element)) {
//         data.numbers[numberCounter] = parseFloat(element);
//         numberCounter++;
//     } else {
//         data.operators[operatorCounter] = element;
//         operatorCounter++;
//     }
// });

// console.log(data);



let str = "100+54-45/545*5454%22*4545";

const data = {
    numbers: [],
    operators: []
};

// Regular expression to match numbers and operators
const regex = /(\d+(\.\d+)?|[\+\-\*\/\%])/g;

// Extract numbers and operators from the string
const elements = str.match(regex);

// Populate numbers and operators arrays
elements.forEach(element => {
    if (/[0-9]/.test(element) || element === '.') {
        data.numbers.push(parseFloat(element));
    } else {
        data.operators.push(element);
    }
});

// Calculate result based on operator precedence (BODMAS/BIDMAS) rule
const operatorsPrecedence = ['%', '*', '/', '+', '-'];

operatorsPrecedence.forEach(operator => {
    while (data.operators.includes(operator)) {
        const index = data.operators.indexOf(operator);
        const leftOperand = data.numbers[index];
        const rightOperand = data.numbers[index + 1];
        let result;

        switch (operator) {
            case '%':
                result = (leftOperand / 100) * rightOperand;
                break;
            case '*':
                result = leftOperand * rightOperand;
                break;
            case '/':
                result = leftOperand / rightOperand;
                break;
            case '+':
                result = leftOperand + rightOperand;
                break;
            case '-':
                result = leftOperand - rightOperand;
                break;
            default:
                break;
        }

        // Update numbers and operators arrays with the result
        data.numbers.splice(index, 2, result);
        data.operators.splice(index, 1);
    }
});

console.log("Result:", data.numbers[0]);

