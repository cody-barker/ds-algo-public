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

// function reverseString(str) {
//   let reversed = "";
//   for (let i=str.length - 1; i >= 0; i--) {
//     reversed += str[i]
//   }
//   console.log(reversed == str)
// }

// function reverseString(str) {
//   const arr = str.split("");
//   let reversed = [];
//   for (const char of arr) {
//     reversed.unshift(char);
//   }
//   console.log(reversed.join("") === str);
// // }

// function reverseString(string) {
//   const arr = string.split("");
//   const reversed = [];
//   for (const char of arr) {
//     reversed.unshift(char)
//   }
//   console.log(reversed.join("") === string)
// }

// reverseString("racecar");

// // if (require.main === module) {
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

//create a new string called reversedString
//iterate over string and unshift each char into reversedString
//return reversedString

function reverseString(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}

console.log(reverseString("a"));

module.exports = reverseString;
