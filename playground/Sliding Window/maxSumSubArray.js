function maxSumSubArray(arr, k) {
/**
 * compare maxSum with windowSum and update maxSum if the windowSum is greater
 * return maxSum
 */
let maxSum = 0;
let windowSum = 0;

for (let i = 0; i < k; i++) {
  maxSum += arr[i]
}

debugger;
windowSum = maxSum;

for (let end = k; end < arr.length; end++) {
  windowSum += arr[end] - arr[end-k]
  if (windowSum > maxSum) {
    maxSum = windowSum;
  }
}

return maxSum
}


console.log(maxSumSubArray([1,3,5,7,2,3,4], 3))
