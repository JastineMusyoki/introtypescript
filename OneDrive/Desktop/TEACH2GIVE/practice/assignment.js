"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//QUESTION ONE
for (let x = 1; x < 100; x++) {
    let output = "";
    if (x % 3 === 0) {
        output += "Fizz";
    }
    if (x % 5 === 0) {
        output += "Buzz";
    }
    console.log(output || x);
}
//QUESTION TWO
function generateFibonacciUpTo100() {
    let fibSequence = [0, 1];
    let nextFib = fibSequence[0] + fibSequence[1];
    while (nextFib <= 100) {
        fibSequence.push(nextFib);
        nextFib =
            fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
    }
    return fibSequence;
}
console.log(generateFibonacciUpTo100());
//QUESTION THREE
function isPowerOfTwo(n) {
    if (n <= 0)
        return false;
    return (n & (n - 1)) === 0;
}
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(6));
//QUESTION FOUR
const promptSync = require("prompt-sync");
const prompt = promptSync();
function capitalizeWords(input) {
    return input.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
//const userInput: string = prompt('Enter a string to capitalize: ');
//const capitalizedString: string = capitalizeWords(userInput);
//console.log(capitalizedString);
//QUESTION FIVE
function reverseDigits(n) {
    const isNegative = n < 0;
    const reversedString = Math.abs(n).toString().split('').reverse().join('');
    const reversedNumber = parseInt(reversedString, 10);
    return isNegative ? -reversedNumber : reversedNumber;
}
const userInput = parseInt(prompt('Enter an integer: '));
console.log("Reversed number:", reverseDigits(userInput));
//QUESTION SIX
function countVowels(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;
    for (const char of sentence) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("My name is mwikali"));
