const entries = [3000, 500];
let i = 0;

function gets() {
   const values = entries[i];
   i++;
   return values;
}

function print(text) {
    console.log(text);
}

module.exports = { gets, print };

