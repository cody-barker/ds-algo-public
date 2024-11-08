// function fibonacci(num) {
//   if (num <= 1) {
//     return num
//   }

//   let a = 0, b = 1, c;
//   for (let i = 2; i<= num; i++) {
//     c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }

//start at 2, with 0 and 1 base case

// function fibonacci(num) {
//   if (num <= 1) {
//     return num;
//   }
//   let a = 0,
//     b = 1,
//     c;
//   for (let i = 2; i <= num; i++) {
//     c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }

// function fibonacci(num) {
//   if (num <= 1) {
//     return num;
//   }
//   let a = 0,
//     b = 1,
//     c;
//   for (let i = 2; i <= num; i++) {
//     c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }

function fibonacci(num) {
  if (num <= 1) {
    return num;
  }

  let a = 0,
    b = 1,
    c;

  for (let i = 2; i <= num; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return c;
}

console.log(fibonacci(5));

// console.log(fibonacci(3))

//find the nth element of the fibonacci sequence given an target
//counter variables to keep track of i, a, b, c, target
//a = 0, b = 1, c = a + b
//a = b, b = c
//i = 2,

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
