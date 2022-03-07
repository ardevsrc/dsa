class Node {
  data: any;
  prev: Node | null;

  constructor(data: any) {
    this.data = data;
    this.prev = null;
  }
}

class Queue {
  first: Node | null;
  last: Node | null;

  constructor() {
    this.first = null;
    this.last = null;
  }

  peek(): Node | null {
    return this.first;
  }
}