let p1Note = 8;
let p2Note = 8;
let activityNote = 10; 

const average = (p1Note * 0.4 + p2Note * 0.4 + activityNote * 0.2);

if (average <5) {
    console.log(' Final Test ' + average.toFixed(2));
} else if (average >= 5 && average <= 10) {
    console.log (' Approved with ' + average.toFixed(2));
}