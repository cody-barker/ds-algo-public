// function selectionSortRecursive(arr) {
//   if (arr.length === 0) {
//     return [];
//   }

//   const min = Math.min(...arr);
//   const idx = arr.indexOf(min);
//   arr.splice(idx, 1);

//   const result = selectionSortRecursive(arr);
//   result.unshift(min);
//   return result;
// }

// function selectionSortRecursive(arr) {
//   if (arr.length === 0) {
//     return [];
//   }

//   const min = Math.min(...arr);
//   const idx = arr.indexOf(min)
//   arr.splice(idx, 1)

//   const result = selectionSortRecursive(arr)
//   result.unshift(min)
//   return result
// }

function selectionSortRecursive(arr, startIndex = 0) {
  // Base case: if we've reached the end of the array, return
  if (startIndex >= arr.length - 1) {
    return arr;
  }

  // Find the index of the minimum element in the unsorted part
  let minIndex = startIndex;
  for (let i = startIndex + 1; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
  }

  // Swap the found minimum element with the first element of the unsorted part
  if (minIndex !== startIndex) {
    [arr[startIndex], arr[minIndex]] = [arr[minIndex], arr[startIndex]];
  }

  // Recur for the remaining unsorted part
  return selectionSortRecursive(arr, startIndex + 1);
}

// Example usage
const arr = [64, 25, 12, 22, 11];
console.log(selectionSortRecursive(arr)); // Outputs: [11, 12, 22, 25, 64]

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
