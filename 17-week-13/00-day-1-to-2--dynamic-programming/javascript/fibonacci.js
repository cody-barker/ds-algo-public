let fibs = [];

function fibonacci(num) {
  if (num === 0 || num === 1) return num;
  if (fibs[num]) return fibs[num];
  fibs[num] = fibonacci(num - 1) + fibonacci(num - 2);
  return fibs[num];
}

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
