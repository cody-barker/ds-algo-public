// create a new array
// iterate over the argument array, pushing each element into the new array
// concatenate the array into a string


// function reverseString(str) {
//   const reverseArray = [];
//   for (char of str) {
//     reverseArray.unshift(char)
//   }
//   return reverseArray.join("")
// }

function reverseString(str) {
  let reversed = "";
  for (let i=str.length - 1; i >= 0; i--) {
    reversed += str[i]
  }
  console.log(reversed == str)
}

reverseString("racecar")

// if (require.main === module) {
//   // add your own tests in here
//   console.log("Expecting: 'ih'");
//   console.log("=>", reverseString("hi"));

//   console.log("");

//   console.log("Expecting: 'ybabtac'");
//   console.log("=>", reverseString("catbaby"));
// }

// module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
