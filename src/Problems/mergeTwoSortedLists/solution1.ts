function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // create a new ListNode called mergedList
  // define a head variable, assign the mergedList to the head
  // for loop the two lists
  // compare the nodeValue between the two lists
  // if the nodeValue of list1 is less than the nodeValue of list2
  // assign the nodeValue to the head.next
  // let list1 to the next node

  let mergedList = new ListNode(-1);
  const head = mergedList;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      mergedList.next = list1;
      list1 = list1.next;
    } else {
      mergedList.next = list2;
      list2 = list2.next;
    }
    mergedList = mergedList.next;
  }

  if (!list1) {
    mergedList.next = list2;
  } else {
    mergedList.next = list1;
  }
  return head.next;
}

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val;
    this.next = next || null;
  }
}
