class Node {
  constructor(data = null, key = null, next = null, prev = null) {
    this.data = data;
    this.key = key;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }

  // ADD THE NODE TO THE HEAD OF THE LIST
  addHead(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    //set oldHead
    //change oldHead prev
    const oldHead = this.head;
    oldHead.prev = node;

    //change head
    //set new head.next
    this.head = node;
    node.next = oldHead;
    node.prev = null;
  }

  // REMOVE THE TAIL NODE FROM THE LIST
  // AND RETURN IT
  removeTail() {
    if (!this.tail) {
      return null;
    }

    const oldTail = this.tail;
    this.tail = oldTail.prev;

    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = this.tail;
    }

    return oldTail;
  }

  // REMOVE THE GIVEN NODE FROM THE LIST
  // AND THEN RETURN IT
  removeNode(node) {
    switch (node) {
      case this.tail:
        this.removeTail();
        break;
      case this.head:
        // this is a good candidate for a helper method!
        this.head = node.next;

        if (this.head) {
          this.head.prev = null;
        }

        if (!this.head || !this.head.next) {
          this.tail = this.head;
        }

        break;
      default:
        if (node.prev) {
          node.prev.next = node.next;
        }

        if (node.next) {
          node.next.prev = node.prev;
        }
    }

    return node;
  }

  // MOVE THE GIVEN NODE FROM ITS LOCATION TO THE HEAD
  // OF THE LIST
  moveNodeToHead(node) {
    const removed = this.removeNode(node);
    this.addHead(removed);
  }
}

class LRUCache {
  constructor(limit = 10) {
    this.limit = limit;
    this.size = 0;
    this.hash = {};
    this.list = new DoublyLinkedList(limit);
  }

  // RETRIEVE THE NODE FROM THE CACHE USING THE KEY
  // IF THE NODE IS IN THE CACHE, MOVE IT TO THE HEAD OF THE LIST AND RETURN IT
  // OTHERWISE RETURN -1
  get(key) {}

  // ADD THE GIVEN KEY AND VALUE TO THE CACHE
  // IF THE CACHE ALREADY CONTAINS THE KEY, UPDATE ITS VALUE AND MOVE IT TO
  // THE HEAD OF THE LIST
  // IF THE CACHE DOESN'T CONTAIN THE KEY, ADD IT TO THE CACHE AND PLACE IT
  // AT THE HEAD OF THE LIST
  // IF THE CACHE IS FULL, REMOVE THE LEAST RECENTLY USED ITEM BEFORE ADDING
  // THE NEW DATA TO THE CACHE
  put(key, value) {}
}

if (require.main === module) {
  // add your own tests in here
}

module.exports = {
  Node,
  DoublyLinkedList,
  LRUCache,
};

// Please add your pseudocode to this file
// And a written explanation of your solution
