//HARD: Create 4 math functions, one called add() that adds 2 numbers, one called subtract() that subtracts 2 numbers, one called multiply() to multiply 2 numbers, and one called divide() to divide two numbers.
const num1 = userInput.length;
const num2 = userInput.length;
let result;

if (operator == '+'){
    result = num1 + num2;
} else if (operator == '-'){
    result = num1 - num2;
} else if (operator == '*'){
    result = num1 * num2;
} else if (operator == '/'){
    result = num1 / num2;
} else{
    console.log('Not valid')
}
