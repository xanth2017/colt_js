// An example of Big O for space complexity O(n)

function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[1]);
  }
  return newArr;
}
