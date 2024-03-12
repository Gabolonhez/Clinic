// create a program to do a list of numbers and print the even numbers found.

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
const number = numbers[i];  
if (number % 2 === 0) {
    console.log(number);
    }
}