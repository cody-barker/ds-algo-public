// function binarySearch(arr, target) {
//   // // type your code here
//   //   return false if array is empty
//   if (arr.length === 0) {
//     return false;
//   }
//   // initialize integer variable middle with middle index of input array
//   let middle = Math.floor(arr.length / 2);
//   // initialize integer variable middle_value with middle value from array
//   let middleValue = arr[middle];

//   // return true if middle_value == target
//   if (middle_value === target) {
//     return true;
//   }
//   // if middle_value > target:
//   //   return binary_search(left half of input, target)
//   // else:
//   //   return binary_search(right half of input, target)

//   if (middle_value > target) {
//     return binary_search(arr.slice(0, middle), target);
//   } else {
//     return binary_search(arr.slice(middle, arr.length), target);
//   }
// }

function binarySearchIndex(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // Calculate middle index
    // Using (left + right) >>> 1 avoids integer overflow
    // compared to Math.floor((left + right) / 2)
    const mid = (left + right) >>> 1;

    // If target is found at mid, return it
    if (arr[mid] === target) {
      return mid;
    }

    // If target is greater, ignore left half
    if (arr[mid] < target) {
      left = mid + 1;
    }
    // If target is smaller, ignore right half
    else {
      right = mid - 1;
    }
  }

  // Target not found
  return -1;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", binarySearchIndex([1, 2, 3], 3));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", binarySearchIndex([3, 5, 9], 10));

  // UNCOMMENT FOR BONUS
  // console.log("");
  // console.log("Expecting: 0");
  // console.log("=>", binarySearchIndex([1, 2, 3], 1));

  // console.log("");

  // console.log("Expecting: -1");
  // console.log("=>", binarySearchIndex([4, 7, 20], 100));
}

module.exports = {
  // binarySearch,
  binarySearchIndex,
};

// Add a written explanation of your solution
