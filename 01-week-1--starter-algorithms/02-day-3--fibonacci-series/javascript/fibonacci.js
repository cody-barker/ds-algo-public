

function fibonacci(num) {
  if (num <= 1) {
    return num 
  }

  let a = 0, b = 1, c;
  for (let i = 2; i<= num; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}

//variables
//a b and c
//c = a + b

// console.log(fibonacci(3))

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
