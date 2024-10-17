// function reverseString(string) {
//   //create a variable called reversedString
//   let reversedString = "";
//   //iterate over the input string, starting at the last index, and add that char to reversedString
//   for (let i = string.length - 1; i >= 0; i--) {
//     reversedString += string[i];
//   }

//   return reversedString;
// }

// function reverseString(string) {
//   return string.split("").reverse().join("");
// }

function reverseString(string) {
  if (string === "") {
    return "";
  } else {
    return reverseString(string.substr(1)) + string.charAt(0);
  }
}

console.log(reverseString("123"));
