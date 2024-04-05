// function findShortestString(arr) {
//   let shortest = arr[0];
//   for (element of arr) {
//     if (element.length < shortest.length) {
//       shortest = element
//     }
//   }
//   return shortest
// }

//look at each string
//first string becomes shortest
//compare next str to shortest
//if next string is shorter, make it the new shortest
//return shortest

function findShortestString(arr) {
  let shortestString = arr[0];
  for (let str of arr) {
    if (str.length < shortestString.length) {
      shortestString = str;
    }
  }
  return shortestString;
}

//look at each string and store its length
//at the end, return the string with the shortest length
//could do this by storing them in an object
//key is i, value is length

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(["aaa", "a", "bb", "ccc"]));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(["cat", "hi", "dog", "an"]));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log(
    "=>",
    findShortestString(["flower", "juniper", "lily", "dadelion"])
  );

  // BENCHMARK HERE
  const longInput = [];
  const shortInput = [];
  const startTime = Date.now();

  for (let i = 0; i < 100; i++) {
    longInput.push(Math.random());
  }

  for (let i = 0; i < 3; i++) {
    shortInput.push(Math.random());
  }

  for (let i = 0; i < 1000; i++) {
    findShortestString(longInput);
    findShortestString(shortInput);
  }

  const endTime = Date.now();

  const totalTime = endTime - startTime;
  const averageRuntime = totalTime / 1000;
  console.log("Average Runtime:", averageRuntime, "milliseconds");
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
