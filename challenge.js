// Start with your code from LinkedList challenge.

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(number) {
    // your code here
    const newNode = new Node(number);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

  }

  remove() {
    // your code here
    // Check if queue is empty
    if (!this.head) return -1;

    const headTemp = this.head;
    this.head = this.head.next;
    return headTemp.value;
  }
}

const queue = new Queue();

queue.add(3);
queue.add(5);
console.log(queue.remove());
// => 3

queue.add(2);
queue.add(7);
console.log(queue.remove());
// => 5

console.log(queue.remove());
// => 2

console.log(queue.remove());
// => 7

console.log(queue.remove());
// => -1

module.exports = Queue;
