class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor(front = null) {
    this.front = front;
    this.rear = front;
  }

  // ADD NODE TO BACK OF QUEUE
  // USE DATA TO CREATE A NEW NODE AND ADD IT TO THE QUEUE
  enqueue(data) {
    //create a node
    const node = new Node(data);
    //test if the queue is empty
    if (!this.rear) {
      //if empty, make the node both the front and rear of the queue then return
      this.front = node;
      this.rear = node;
      return;
    }
    //otherwise change the next for the current rear from null to the node
    this.rear.next = node;
    this.rear = node;
    //then change the rear to this node
  }

  // REMOVE NODE FROM FRONT OF QUEUE AND RETURN IT
  dequeue() {
    //not an array so we cant use pop or unshift
    if (!this.front) {
      return this.front;
    }

    const node = this.front;
    this.front = node.next;

    if (!this.front || !this.front.next) {
      this.rear = this.front;
    }

    return node;
  }

  // RETURN NODE AT FRONT WITHOUT REMOVING IT
  peek() {
    return this.front;
  }

  // RETURN TRUE IF QUEUE IS EMPTY, OTHERWISE FALSE
  isEmpty() {
    return !this.front;
  }

  // RETURN NUMBER OF NODES IN QUEUE, E.G. 10
  size() {
    let node = this.front;
    let count = 0;

    while (node) {
      node = node.next;
      count++;
    }

    return count;
  }

  // RETURN INTEGER REPRESENTING HOW FAR TARGET IS FROM FRONT OF QUEUE
  // IF TARGET ISN'T IN QUEUE, RETURN -1
  search(target) {}
}

if (require.main === module) {
  // add your own tests in here
}

module.exports = {
  Node,
  Queue,
};

// Write your Big O findings here

// Optional: Please add your pseudocode to this file
// Optional: And a written explanation of your solution
