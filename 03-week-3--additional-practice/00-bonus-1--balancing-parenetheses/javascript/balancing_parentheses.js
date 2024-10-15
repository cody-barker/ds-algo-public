//iterate over string
//idea 1
//create an object and store the number of open or closed parentheses
//subtract the difference and return that number as the number of closed needed

// function balancingParentheses(string) {
//   let store = { open: 0, closed: 0 };
//   let arr = string.split("");
//   for (let p of arr) {
//     if (p === "(") {
//       store.open += 1;
//     } else {
//       store.closed += 1;
//     }
//   }
//   return store.closed - store.open;
// }

// balancingParentheses("(())")

// function balancingParentheses(string) {
//   let hash = { open: 0, closed: 0 };
//   for (let i = 0; i < string.length; i++) {
//     string[i] === "(" ? (hash.open += 1) : (hash.closed += 1);
//   }

//   return hash.closed - hash.open;
// }

function balancingParentheses(string) {
  let openNeeded = 0; // Keeps track of open parentheses needed
  let closeNeeded = 0; // Keeps track of close parentheses needed

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      openNeeded += 1;
    } else if (string[i] === ")") {
      if (openNeeded > 0) {
        // We have a matching open parenthesis, so reduce openNeeded
        openNeeded -= 1;
      } else {
        // No open parenthesis to match, we need an extra open parenthesis
        closeNeeded += 1;
      }
    }
  }

  // Total adjustments needed is the sum of unmatched opens and unmatched closes
  return openNeeded + closeNeeded;
}

console.log(balancingParentheses("(()"));

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses("(()())"));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses("()))"));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(")"));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
