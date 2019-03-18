/* Calculate a function that calculates the sum of all the numbers from 1 up
(and including) some numbers n */

function addUpTo(n){
  return n * (n + 1) / 2;
}

var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1)/ 1000} seconds`);
