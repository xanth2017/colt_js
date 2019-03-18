// Big O example of O(n)


function logAtLeast5(n) {
  for (var i = 1; i <= Math.max(5, n); i++){
    console.log(i);
  }
}


logAtLeast5(1);
