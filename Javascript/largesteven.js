const { gets, print } = require("./get_print");

const n = gets();
let largestEvenNumber = null;
let smallestOddNumber = null;

for (let i = 0; i < n; i++) {
  const number = gets();
  if (number % 2 === 0) {
    if (largestEvenNumber === null || number > largestEvenNumber) {
        largestEvenNumber = number;
    }
  } else {
    if (smallestOddNumber === null || number < smallestOddNumber) {
      smallestOddNumber = number;
    }
  } 
}
print("The largest even number is " + largestEvenNumber);
print("The smallest odd number is " + smallestOddNumber);
