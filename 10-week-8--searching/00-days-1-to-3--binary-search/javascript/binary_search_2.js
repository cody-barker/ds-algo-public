function binarySearchIndex(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    debugger;
    // Calculate middle index
    // Using (left + right) >>> 1 avoids integer overflow
    // compared to Math.floor((left + right) / 2)
    const mid = Math.floor((left + right) / 2);

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

binarySearchIndex([1, 2, 3, 4, 5, 6], 2);
