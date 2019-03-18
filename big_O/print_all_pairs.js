// Another example of Big O
// * f(n) could be quadratic (f(n) = n²) example

function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++){
      console.log(i,j);
    }
  }
}

printAllPairs(20);
