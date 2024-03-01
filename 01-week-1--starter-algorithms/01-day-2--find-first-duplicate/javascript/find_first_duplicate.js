//create an empty object called store
//iterate over the arr
//if store has a key equal to the element in arr, return the element
//  else if store does not have a key equal to the element in arr, create the key with a value of 1
//return -1


function findFirstDuplicate(arr) {
  const store = {};
  for (let i = 0; i < arr.length; i++) {
    if (store[arr[i]]) {
      return arr[i];
    } else {
      store[arr[i]] = true;
    }
  }
  return -1
}

console.log(findFirstDuplicate([1,2,3,4,2]))

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
