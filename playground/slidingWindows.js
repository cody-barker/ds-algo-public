function maxSumSubarray(arr, k) {
    if (arr.length < k) {
        return null; // Edge case: if array is smaller than the window size
    }

    // Calculate the sum of the first window
    let maxSum = 0;
    for (let i = 0; i < k; i++) {
        maxSum += arr[i];
    }

    let windowSum = maxSum;
    
    // Slide the window across the array
    for (let end = k; end < arr.length; end++) {
        windowSum += arr[end] - arr[end - k]; // Add new element, remove the one going out
        maxSum = Math.max(maxSum, windowSum); // Update maxSum if windowSum is greater
    }

    return maxSum;
}

function maximumSubArray(arr, k) {
 // Edge case: if array is smaller than the window size
 if (array.length < k) {
    return null
 }

 // Calculate the sum of the first window
 let maxSum = 0;
 for (let i = 0; i < k; i++) {
    maxSum += array[i];
 }

 let windowSum = maxSum;
 // Slide the window across the array
for (let end = k; end < array.length; end++) {
    windowSum += arr[end] - arr[end - k];
    maxSum = Math.max(maxSum, windowSum)
}
    // Add new element, remove the one going out
    // Update maxSum if windowSum is greater
return maxSum
}

//to find the max subarray with a sliding window
/**
 * if the window is greater than the length of the array, return null
 * 
 * calculate the current maxSum of the window
 * set the windowSum = to the maxSum
 * 
 * loop over end = k, while end < array.length, end++
 * recalculate windowSum by adding the next element, and removing the first one in the window (using end and end - k as the incides)
 * 
 * return maxSum
 */

// Example usage:
const arr = [2, 1, 5, 1, 3, 2];
const k = 3;
console.log(maxSumSubarray(arr, k)); // Output: 9, from subarray [5, 1, 3]
