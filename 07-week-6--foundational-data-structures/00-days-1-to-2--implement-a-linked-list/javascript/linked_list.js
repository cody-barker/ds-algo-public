class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  iterate(callback) {
    let count = 0;
    let currentNode = this.head;

    while (currentNode !== null) {
      const result = callback(currentNode, count);

      if (result === true) {
        return currentNode;
      }

      ++count;
      currentNode = currentNode.next;
    }

    return this.head;
  }

  // print each node's value on its own line
  // use your iterate method to be DRY! Don't get caught in the code rain, brrr.
  print() {
    this.iterate((node) => {
      console.log(node.value);
    });
  }

  // find the node with the target value and return it
  // if not found return null, use your iterate method to be DRY!
  find(target) {
    let result = null;

    this.iterate((node) => {
      if (node.value === target) {
        result = node;
        return true;
      }
    });

    return result;
  }

  // add the node to the start of the list, no nodes should be removed
  addFirst(node) {
    //set the next value of the node to this.head
    //change this.head to this node
    node.next = this.head;
    this.head = node;
  }

  // add node to end of list, no nodes should be removed
  // you may wish to use the iterate method
  addLast(node) {
    if (this.head === null) {
      this.head = node;
      return;
    }

    this.iterate((currentNode) => {
      if (currentNode.next === null) {
        currentNode.next = node;
        return true;
      }
    });
  }

  // remove the first Node in the list and update head
  // and return the removed node
  removeFirst() {
    const oldHead = this.head;

    if (this.head !== null) {
      this.head = this.head.next;
    }

    return oldHead;
  }

  // remove the tail node, iterate may be helpful
  // return the node you just removed
  removeLast() {
    if (this.head === null || this.head.next === null) {
      return this.removeFirst();
    }

    let oldTail = null;

    this.iterate((currentNode) => {
      if (currentNode.next.next === null) {
        oldTail = currentNode.next;
        currentNode.next = null;
        return true;
      }
    });

    return oldTail;
  }

  // replace the node at the given index with the given node
  replace(idx, node) {
    if (idx === 0) {
      node.next = this.head.next;
      this.head = node;
      return node;
    }

    this.iterate((currNode, count) => {
      if (count === idx - 1) {
        node.next = currNode.next.next;
        currNode.next = node;

        return true;
      }
    });

    return node;
  }

  // insert the node at the given index
  // no existing nodes should be removed or replaced
  insert(idx, node) {
    // Special case for inserting at the head
    if (idx === 0) {
      this.addFirst(node);
      return node;
    }

    this.iterate((currentNode, count) => {
      if (count === idx - 1) {
        // Insert the node between currentNode and the next node
        node.next = currentNode.next;
        currentNode.next = node;
        return true;
      }
    });

    return node;
  }

  // remove the node at the given index, and return it
  remove(idx) {
    if (idx === 0) {
      return this.removeFirst();
    }

    let removed = null;

    this.iterate((currentNode, count) => {
      if (count === idx - 1) {
        removed = currentNode.next;
        currentNode.next = currentNode.next.next;
        return true;
      }
    });

    return removed;
  }

  clear() {
    this.head = null;
  }
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

if (require.main === module) {
  // add your own tests in here
}

module.exports = {
  Node,
  LinkedList,
};
