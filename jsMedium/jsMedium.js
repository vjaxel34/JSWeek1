
let userAnswer = prompt("How are you feeling?");

let checkUpper = userAnswer.toUpperCase();
let checkLower = userAnswer.toLowerCase();

if(userAnswer === checkUpper){
    console.log('The user is shouting.');
} else if(userAnswer === checkLower){
    console.log('The user is whispering.');
} else{
    console.log('The user is talking normally');
}
