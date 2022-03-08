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
}