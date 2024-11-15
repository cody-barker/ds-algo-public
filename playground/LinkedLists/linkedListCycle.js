class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}


function hasCycle(head) {
     if (!head || !head.next) return false
     
     let seen = new Set();
     let node = head;

     while (node) {
      debugger;
        if (seen.has(node)) {
            return true
        } else {
            seen.add(node)
            node = node.next
        }
     }

     return false

};

let cycle = new Node(3)
let head = new Node(1, cycle)
cycle.next = new Node(4, new Node(5, cycle))

console.log(hasCycle(head))