// function recursiveSearch(arr, target, i = 0) {
//   if (i >= arr.length) {
//     return false
//   }

//   if (arr[i] === target) {
//     return true
//   }

//   return recursiveSearch(arr, target, ++i);
// }

function recursiveSearch(arr, target) {
  if (arr.length === 0) {
    return false;
  }

  if (arr[0] === target) {
    return true;
  }

  return recursiveSearch(arr.splice(1), target);
}

//start with a base case to end the stack
//start with arr[0], if not equal to target, call again and iterate to arr[1] until end of arr
//default to returning false

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// And a written explanation of your solution
