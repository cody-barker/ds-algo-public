/**
 * **create a current string variable = ""
 * create a new empty string of string[0]
 * add string[0 + 1] until length of string,
 * then i++
 * str = str.slice(i)
 */

// function consecutiveSubstrings(string) {
//   let currentString = '';
//   for (let i = 0; i < string.length; i++) {
//     string[i]
//   }
// }

// function consecutiveSubstrings(str) {
//   const substrings = [];

//   for (let start = 0; start < str.length; start++) {
//     for (let end = start + 1; end <= str.length; end++) {
//       substrings.push(str.slice(start, end));
//     }
//   }

//   return substrings;
// }

// function consecutiveSubstrings(string) {
//   const subStrings = [];

//   for (let start = 0; start < string.length; start++) {
//     for (let end = start + 1; end <= string.length; end++) {
//       subStrings.push(string.slice(start, end));
//     }
//   }

//   return subStrings;
// }

function consecutiveSubstrings(string) {
  const subStrings = [];

  for (let start = 0; start < string.length; start++) {
    for (let end = start + 1; end <= string.length; end++) {
      subStrings.push(string.slice(start, end));
    }
  }

  return subStrings;
}

// Example Usage:
console.log(consecutiveSubstrings("abc")); // Output: ['a', 'ab', 'abc', 'b', 'bc', 'c']
console.log(consecutiveSubstrings("a")); // Output: ['a']
console.log(consecutiveSubstrings("")); // Output: []

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings("abc"));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings("a"));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// And a written explanation of your solution
