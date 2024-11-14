function merge(arr1, arr2) {
  let result = [];

  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      result.push(arr1.shift());
    } else if (arr1[0] > arr2[0]) {
      result.push(arr2.shift());
    } else {
      // If the elements are equal, push from both arrays
      result.push(arr1.shift(), arr2.shift());
    }
  }

  // If there are remaining elements in either arr1 or arr2, add them to result
  return result.concat(arr1, arr2);
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2]");
  console.log("=>", mergeSort([2, 1]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", mergeSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: [-10, 0, 2, 2, 5, 10, 20]");
  console.log("=>", mergeSort([10, -10, 0, 2, 20, 5, 2]));
}

module.exports = mergeSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
