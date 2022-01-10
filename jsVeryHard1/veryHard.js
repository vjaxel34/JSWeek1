//Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"

const operator = prompt('Enter operator to perform the calculation (+, -, *, /): '); 
//The parseFloat() function is used to accept a string and convert it into a floating-point number. If the input string does not contain a numeral value or If the first character of the string is not a number then it returns NaN i.e, not a number.
const num1 = parseFloat(prompt ('Enter the first number:')); 
const num2 = parseFloat(prompt('Enter the second number: '));
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

window.alert('Result is' + result);