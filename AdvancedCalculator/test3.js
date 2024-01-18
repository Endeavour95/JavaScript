let arrstr = ["(", "(", "(", "1", "0", "0", "+", "5", "4", ")", "-", "4", "5", ")", "/", "5", "4", "5", ")", "*", "(", "(", "5", "4", "5", "4", "%", "2", "2", ")", "*", "4", "5", "4", "5", ")"];


const data = {
    numbers: [],
    operators: []
};

let str = arrstr.join('');

console.log(str)

for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];

    if (/[0-9.]/.test(currentChar)) {
        // If the character is a digit or a dot, start building the number
        let number = currentChar;

        // Continue adding digits and dots until a non-digit, non-dot character is encountered
        while (i + 1 < str.length && /[0-9.]/.test(str[i + 1])) {
            i++;
            number += str[i];
        }

        // Push the constructed number into the 'numbers' array
        data.numbers.push(parseFloat(number));
    } else {
        // If the character is not a digit or dot, it is an operator
        data.operators.push(currentChar);
    }
}

console.log(data.numbers)
console.log(data.operators)