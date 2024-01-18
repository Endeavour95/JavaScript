function calculateExpression(expression) {
    // Function to handle operations based on BODMAS
    function performOperation(op, a, b) {
      switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        case '%': return a % b;
        default: throw new Error(`Unknown operator: ${op}`);
      }
    }
  
    // Function to handle parentheses and recursively evaluate expressions within them
    function evaluateParentheses(expr) {
      let start = expr.indexOf('(');
      let end = expr.lastIndexOf(')');
      if (start !== -1 && end !== -1) {
        const innerExpr = expr.substring(start + 1, end);
        const innerResult = calculateExpression(innerExpr);
        return evaluateParentheses(expr.substring(0, start) + innerResult + expr.substring(end + 1));
      } else {
        return expr;
      }
    }
  
    // Main evaluation loop
    while (expression.length > 1) {
      expression = evaluateParentheses(expression);
  
      // Find the highest priority operation
      const ops = ['%', '*', '/', '+', '-'];
      const opIndex = ops.findIndex(op => expression.includes(op));
      const op = ops[opIndex];
  
      if (op !== undefined) {
        const parts = expression.split(op);
        const result = performOperation(op, parseFloat(parts[0]), parseFloat(parts[1]));
        expression = parts[0] + result + parts[2]; // Replace the operands and operator with the result
      }
    }
  
    return parseFloat(expression);
  }
  
  const str1 = "(((100+54)-45)/9)*((54%22)*4)";
  const result = calculateExpression(str1);
  console.log(result); // Output: 96
  











// let arrstr = ["(", "(", "(", "1", "0", "0", "+", "5", "4", ")", "-", "4", "5", ")", "/", "5", "4", "5", ")", "*", "(", "(", "5", "4", "5", "4", "%", "2", "2", ")", "*", "4", "5", "4", "5", ")"];


// const data = {
//     numbers: [],
//     operators: []
// };

// let str = arrstr.join('');

// console.log(str)

// for (let i = 0; i < str.length; i++) {
//     const currentChar = str[i];

//     if (/[0-9.]/.test(currentChar)) {
//         // If the character is a digit or a dot, start building the number
//         let number = currentChar;

//         // Continue adding digits and dots until a non-digit, non-dot character is encountered
//         while (i + 1 < str.length && /[0-9.]/.test(str[i + 1])) {
//             i++;
//             number += str[i];
//         }

//         // Push the constructed number into the 'numbers' array
//         data.numbers.push(parseFloat(number));
//     } else {
//         // If the character is not a digit or dot, it is an operator
//         data.operators.push(currentChar);
//     }
// }

// console.log(data.numbers)
// console.log(data.operators)