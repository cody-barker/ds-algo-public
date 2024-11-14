function bubbleSort(arr) {
  function swap(arr) {
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        count++;
      }
    }
    return count;
  }

  let swaps = swap(arr);

  while (swaps > 0) {
    swaps = swap(arr);
  }

  return arr;
}

// function bubbleSort(arr) {
//   let n = arr.length;

//   while (n > 0) {
//     let swapped = false;

//     for (let i = 0; i < n - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//         swapped = true;
//       }
//     }

//     // If no swaps happened, the array is sorted
//     if (!swapped) break;

//     // Reduce the range for the next pass
//     n--;
//   }

//   return arr;
// }

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2, 3, 4]");
  console.log("=>", bubbleSort([3, 2, 1, 4]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", bubbleSort([]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([2, 3, 1]));
}

module.exports = bubbleSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
