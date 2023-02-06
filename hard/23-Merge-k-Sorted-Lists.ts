class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function createList(numbers: number[]): ListNode | null {
  let head: ListNode | null = null;
  let current: ListNode | null = null;
  for (const number of numbers) {
    const node = new ListNode(number);
    if (!head) {
      head = node;
      current = head;
    } else {
      current!.next = node;
      current = current!.next;
    }
  }
  return head;
}

function getArray(head: ListNode): number[] {
  let result: number[] = [];

  while (true) {
    if (head == null) break;

    result.push(head.val);
    head = head.next;
  }
  return result;
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let values: number[] = [];
  lists.forEach((list) => {
    values = [...values, ...getArray(list)];
  });
  values.sort((a, b) => a - b);

  return createList(values);
}
