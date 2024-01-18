
let str = "100+54-45/545*5454%22*4545";

const data = {
    numbers: {},
    operators: {}
};

// Regular expression to match numbers and operators
const regex = /(\d+(\.\d+)?|[\+\-\*\/\%])/g;

// Extract numbers and operators from the string
const elements = str.match(regex);

// Initialize counters
let numberCounter = 1;
let operatorCounter = 1;

// Iterate through the elements and store them in the data object
elements.forEach(element => {
    if (/[0-9]/.test(element)) {
        data.numbers[numberCounter] = parseFloat(element);
        numberCounter++;
    } else {
        data.operators[operatorCounter] = element;
        operatorCounter++;
    }
});

console.log(data);
