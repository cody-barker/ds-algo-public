// function recursiveCount(num = 0) {
//   if (num === 10) {
//     return
//   }
//   console.log(num)
//   recursiveCount(++num)
// }

// function recursiveCount(num = 0) {
//   if (num >= 10) {
//     return
//   }

//   console.log(num)
//   recursiveCount(++num)

// }

// function recursiveCount(num = 0) {
//   if (num >= 10) {
//     return;
//   }
//   console.log(num);
//   recursiveCount(++num);
// }

//write the base case

function recursiveCount(num = 0) {
  if (num >= 10) {
    return;
  }
  console.log(num);
  recursiveCount(++num);
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
