// function selectionSort(arr) {
//   return arr.sort((a,b) => a - b)
// }

function selectionSort(arr) {
  // Loop through the entire array
  for (let i = 0; i < arr.length; i++) {
    // Assume the current index is the minimum
    let minIndex = i;

    // Check the rest of the array for a smaller element
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        // If a smaller element is found, update the minimum index
        minIndex = j;
      }
    }

    // If the minimum index has changed, swap the elements
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr; // Return the sorted array
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

  const startTime = Date.now();
  for (let i = 0; i < 1000; i++) {
    selectionSort([3, -1, 5, 2]);
    selectionSort(longInput);
  }
  const endTime = Date.now();

  const averageRuntime = (endTime - startTime) / 2000;
  console.log("Average runtime:", averageRuntime, "milliseconds");
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
