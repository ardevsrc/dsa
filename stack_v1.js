class Node {
  constructor(data) {
    this.data = data;
    this.previous = null;
  }
}

class Stack {
  constructor() {
    this.last = null;
  }

  peek() {
    return this.last;
  }

  push(item) {
    const previousLastItem = this.last;

    this.last = new Node(item);
    this.last.previous = previousLastItem;

    return this.last;
  }

  pop() {
    const removedItem = this.last;

    if (removedItem) {
      this.last = removedItem.previous;
    }

    return removedItem;
  }

}