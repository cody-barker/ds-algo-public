//iterate over string
//idea 1
//create an object and store the number of open or closed parentheses
//subtract the difference and return that number as the number of closed needed

function balancingParentheses(string) {
  let store = {open: 0, closed: 0};
  let arr = string.split("")
  for (let p of arr) {
    if (p === "(") {
      store.open += 1
    }
    else {
      store.closed += 1
    }
  }
  return store.closed - store.open
}

balancingParentheses("(())")

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
