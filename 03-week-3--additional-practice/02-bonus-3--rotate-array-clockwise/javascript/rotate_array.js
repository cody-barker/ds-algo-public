// function rotateArray(arr, k) {
//   const rotations = k % arr.length;
//   const removed = arr.splice(arr.length - rotations, rotations);

//   return removed.concat(arr);
// }

// function rotateArray(arr, k) {
//   const rotations = k % arr.length;
//   //slice end of array, then concat on the beginning of the array
//   return arr.slice(-rotations).concat(arr.slice(0, -rotations));
// }

// function rotateArray(arr, k) {
//   const rotations = k % arr.length;
//   return arr.slice(-rotations).concat(arr.slice(0, -rotations));
// }

function rotateArray(arr, k) {
  const rotations = k % arr.length;
  return arr.slice(-rotations).concat(arr.slice(0, -rotations));
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));
}

module.exports = rotateArray;

// Please add your pseudocode to this file
// And a written explanation of your solution
