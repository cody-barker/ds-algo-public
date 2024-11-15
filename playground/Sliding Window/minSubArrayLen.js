// function minSubArrayLen(target, nums) {
//   if (!nums.length) return 0;

//   let left = 0;
//   let sum = 0;
//   let minLength = Infinity;

//   for (let right = 0; right < nums.length; right++) {
//     sum += nums[right];
    
//     while (sum >= target) {
//       minLength = Math.min(minLength, right - left + 1);
//       sum -= nums[left];
//       left++;
//     }
//   }

//   return minLength === Infinity ? 0 : minLength;
// }

// console.log(minSubArrayLen(5, [1,6,4,5]))

// function minSubArrayLen(target, arr) {
//   if (!arr.length) return 0

//   let left = 0;
//   let sum = 0;
//   let minLength = Infinity;

//   for (let right = 0; right < arr.length; right++) {
//     sum += arr[right];

//     while (sum >= target) {
//       minLength = Math.min(minLength, right - left + 1);
//       sum -= arr[left];
//       left++
//     }
//   }

//   return minLength === Infinity ? 0 : minLength;
// }


function minSubArrayLen(target, arr) {
  if (!arr.length) return 0

  let left = 0;
  let sum = 0;
  let minLength = Infinity;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= arr[left];
      left++;
    }
  }

  return minLength !== Infinity ? minLength : 0;
}

console.log(minSubArrayLen(7, [1,6,4,5]))
