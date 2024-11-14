class Node {
  constructor(value, left = null, right = null) {
    // add your Node class code
    (this.value = value), (this.left = left), (this.right = right);
  }
}

// list = [1, 4, 7]
function oneToSeven() {
  // manually create the BST
  // then return the root node
  const left = new Node(1);
  const right = new Node(7);
  return new Node(4, left, right);
}

// list = [10, 40, 45, 46, 50]
function tenToFifty() {
  const node1 = new Node(10);
  const node2 = new Node(40, node1);
  const node3 = new Node(50);
  const node4 = new Node(46, null, node4);
  return new Node(45, node2, node4);
}

// list = [-20, -19, -17, -15, 0, 1, 2, 10]
function negativeToPositive() {
  const nodeNeg20 = new Node(-20);
  const nodeNeg19 = new Node(-19, nodeNeg20);
  const nodeNeg15 = new Node(-15);
  const nodeNeg17 = new Node(-17, nodeNeg19, nodeNeg15);
  const node10 = new Node(10);
  const node1 = new Node(1, null, node10);
  const node0 = new Node(nodeNeg17, node1);
  return new Node(20, node0);
}

if (require.main === module) {
  // add your own tests in here if you want
}

module.exports = {
  Node,
  oneToSeven,
  tenToFifty,
  negativeToPositive,
};

// Please add your pseudocode to this file
// And a written explanation of your solution
