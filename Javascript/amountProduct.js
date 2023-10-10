let productPrice = 29.99;
const paymentForm = 2;

if (paymentForm === 1) {
    console.log(productPrice - (productPrice * 0.1));
} else if (paymentForm === 2) {
    console.log(productPrice - (productPrice * 0.15));
} else if (paymentForm === 3) {
    console.log(' divided in 2 prince: ' + productPrice / 2 + ' Total price: '+ productPrice);
} else if (paymentForm === 4 ) {
    console.log(productPrice + (productPrice * 0.1));
}
