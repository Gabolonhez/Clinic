const {gets, print} = require('./get_print');

const average = gets();

    if  (average >= 0 && average < 5) {
    print("Disapproved");
} else if (average >= 5 && average < 7) {
    print("Recovery");
} else if (average >=7) {
    print("Approved");
} else {
    print("Invalid number");
}
    