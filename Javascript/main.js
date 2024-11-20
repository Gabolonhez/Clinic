const { gets, print } = require('./get_print');

const quantityOfStudents = gets();
let highestValueFound = 0;

for (let i = 0; i < quantityOfStudents; i++) {
    const drawedNumber = gets();
    if (drawedNumber > highestValueFound) {
        highestValueFound = drawedNumber;
    }
}


print(highestValueFound);





