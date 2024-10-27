class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function levelOrderTraversal(root) {
  // type your code here
  // traverse each level of the tree and concat the values of the nodes from left to right in a result array
  // start with the root, if left, push left value, if right, push right value
  // if left, move to left.left and then left.right
  // if right, move to right.left and then right.right, repeat this process until the node is a leaf
  // might need to track parent node, and child left, child right nodes

  let parent = root[0];
  let childLeft = parent.left; //will be truthy or null
  let childRight = parent.right; //will be truthy or null
  let result = [...parent.value, ...childLeft.value, ...childRight.value];

  // while (childLeft || childRight) {}

  return result;
}

levelOrderTraversal([1, 2, 3]);

if (require.main === module) {
  let root = new Node(1, new Node(2), new Node(3));
  // add your own tests in here
  console.log("Expecting: [[1], [2, 3]]");
  console.log(levelOrderTraversal(root));

  console.log("");

  root = new Node(10, new Node(20, new Node(9), new Node(22)), new Node(30));

  console.log("Expecting: [[10], [20, 30], [9, 22]]");
  console.log(levelOrderTraversal(root));
}

module.exports = {
  Node,
  levelOrderTraversal,
};

// Please add your pseudocode to this file
// And a written explanation of your solution
