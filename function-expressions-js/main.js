// Alexander Paryani
// 06 MAY 2024
// JS Function Expression

// Function 1
// function calcProduct (num1, num2) {
const calcProduct = function (num1, num2) {
    return num1 * num2;
}
const firstNum = 4;
const secondNum = 5;
console.log(`The product of ${firstNum} and ${secondNum} is: ${calcProduct(firstNum, secondNum)}`);

// Function 2
// function welcomeUser (fName) {
const welcomeUser = function (fName) {
    return `Welcome to Career Tech, ${fName}!`;
}
const firstName = 'Alex';
alert(welcomeUser(firstName));

// Function 3
// function showBiography (fName, lName, userAge) {
const showBiography = function (fName, lName, userAge) {
    return `Hello! My name is ${fName} ${lName} and I am ${userAge} years old.`;
}
const firstName2 = 'Alex';
const lastName = 'Paryani';
const age = 18;
console.log(showBiography(firstName, lastName, age));