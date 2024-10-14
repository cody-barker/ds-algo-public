//create an empty object called store
//iterate over the arr
//if store has a key equal to the element in arr, return the element
//  else if store does not have a key equal to the element in arr, create the key with a value of 1
//return -1

// function findFirstDuplicate(arr) {
//   const store = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (store[arr[i]]) {
//       return arr[i];
//     } else {
//       store[arr[i]] = true;
//     }
//   }
//   return -1
// }

// function findFirstDuplicate(arr) {
//   const store = {};
//   for (let i=0; i < arr.length; i++) {
//     if (store[arr[i]]) {
//       return arr[i]
//     } else {
//       store[arr[i]] = 1;
//     }
//   }
//   return -1
// }

//create a store object to store seen values
//iterate through array
//if value has not been seen, create a new key
//if value is a key already, return it
//if all new keys, return -1

// function findFirstDuplicate(arr) {
//   let store = {};
//   for (element of arr) {
//     if (store[element]) {
//       return element
//     } else {
//       store[element] = 1
//     }
//   }
//   return -1
// }

//use an object for storing previously seen numbers
//iterate over the array, if number not a property, add it to obj, if prop, return the num
//if no dup, return -1

// function findFirstDuplicate(arr) {
//   const store = {};
//   for (let num of arr) {
//     if (store[num]) {
//       return num;
//     } else {
//       store[num] = 1;
//     }
//   }
//   return -1;
// }

//find first duplicate in array, if no duplicates return -1

//create a hash for storing key value pairs of the number of times an element appears. ie element is key, value is 1
//iterate over the array and check the hash for a key of that element
//if the key exists, return that key as the duplicate
//if the key does not exist, create the key and set value to anything (ie 1)
//if no duplicates, default return -1 outside of iteration

function findFirstDuplicate(array) {
  let hash = {};
  for (let element of array) {
    if (hash[element]) {
      return element;
    } else {
      hash[element] = 1;
    }
  }
  return -1;
}

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
