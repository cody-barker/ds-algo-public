function printCharacters(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(i + ": " + string[i]);
  }
}

// function printCharacters(string) {
//   Array.from(string).forEach((char, index) => {
//     console.log(`${index}: ${char}`)
//   })
// }

printCharacters("hello");
