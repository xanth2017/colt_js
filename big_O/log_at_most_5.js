// Big O example of  O(1)


function logAtMost5(n) {
  for (var i = 1; i <= Math.min(5, n); i++){
    console.log(i);
  }
}


logAtMost5(1);
