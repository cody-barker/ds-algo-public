class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// function findTarget(root, target) {
//   if (!root) {
//     return null;
//   }

//   if (root.value === target) {
//     return root;
//   }

//   if (root.value > target) {
//     return findTarget(root.left, target);
//   } else {
//     return findTarget(root.right, target);
//   }
// }

function findTarget(root, target) {
  if (!root) {
    return null;
  }

  if (root.value === target) {
    return root;
  }

  if (root.value < target) {
    return findTarget(root.right, target);
  } else {
    return findTarget(root.left, target);
  }
}

if (require.main === module) {
  // add your own tests in here
  const root = new Node(1, new Node(-1), new Node(2));
  console.log("Expecting: Node with value 2");
  console.log(findTarget(root, 2));

  console.log("");

  console.log("Expecting: null");
  console.log(findTarget(root, 5));
}

module.exports = { findTarget, Node };

// Please add your pseudocode to this file
// And a written explanation of your solution
