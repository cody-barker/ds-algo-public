class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// list = [3, 5, 6, 9, 10, 20]
function threeToTwenty() {
  const three = new Node(3);
  const five = new Node(5, three);
  const six = new Node(6, five);
  const twenty = new Node(20);
  const ten = new Node(10, null, twenty);
  return new Node(9, six, ten);
}

// list = [10, 11, 30, 100, 200]
function tenToTwoHundred() {
  const eleven = new Node(11);
  const ten = new Node(10, null, eleven);
  const twoHundred = new Node(200);
  const oneHundred = new Node(100, null, twoHundred);
  return new Node(30, ten, oneHundred);
}

if (require.main === module) {
  // add tests in here if you need them
}

module.exports = {
  Node,
  threeToTwenty,
  tenToTwoHundred,
};

// Please add your pseudocode to this file
// And a written explanation of your solution
