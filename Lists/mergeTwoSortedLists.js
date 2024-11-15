class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function mergeTwoSortedLists(list1, list2) {
  // Handle edge cases
  if (!list1) return list2;
  if (!list2) return list1;

  // Create dummy head to simplify the merging
  let dummy = new ListNode(0);
  let current = dummy;
  
  // Compare and merge while both lists have nodes
  while (list1 && list2) {
    if (list1.value <= list2.value) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  
  // Attach remaining nodes if any
  current.next = list1 || list2;
  
  return dummy.next;
}

function mergeTwoSortedList(list1, list2) {
  if (!list1) return list2
  if (!list2) return list1

  let dummy = new ListNode(0);
  let current = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next
    } else {
      current.next = list2;
      list2 = list2.next
    }
    current = current.next
  }
  
  current.next = list1 || list2

  return dummy.next
}
