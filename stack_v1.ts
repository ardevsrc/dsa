class Node {
  data: any;
  prev: Node | null;
}


class Stack {
  last: Node | null;

  constructor() {
    this.last = null;
  }

  peek(): Node | null {
    return this.last;
  }

  push(item: any): Node | null {
    const previousLastItem = this.last;

    this.last = new Node(item);
    this.last.prev = previousLastItem;

    return this.last;
  }

  pop(): Node | null {
    const removedItem = this.last;

    if (removedItem) {
      this.last = removedItem.prev;
    }

    return removedItem;
  }
}