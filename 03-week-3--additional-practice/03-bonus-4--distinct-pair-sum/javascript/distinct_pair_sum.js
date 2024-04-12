//Return an array of distinct 2 number arrays (check for reverse or by sorting)
//Iterate through, testing whether num1 + num2 = target,
//   if not, num1 = num2, num2 + 1 (how to do this?)

// function distinctPairSum(arr, k) {
//   let distinctArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] + arr[i + 1] === k) {
//       distinctArr.push(new Array(arr[i], arr[i + 1]));
//     }
//   }
//   return distinctArr
// }

function distinctPairSum(arr, k) {
  let distinctArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        let pair = [arr[i], arr[j]].sort((a, b) => a - b); // Sort the pair
        if (!distinctArr.some(([x, y]) => x === pair[0] && y === pair[1])) {
          distinctArr.push(pair);
        }
      }
    }
  }

  return distinctArr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
// And a written explanation of your solution
