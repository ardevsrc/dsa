class Node {
  constructor(data) {
    this.data = data;
    this.previous = null;
  }
}


class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  peek() {
    return this.first;
  }

  enqueue(item) {
    const newLastNode = new Node(item);
    const isEmptyList = !this.first && !this.last;

    if (isEmptyList) {
      this.first = newLastNode;
      this.last = newLastNode;
    }
    else {
      this.last.previous = newLastNode;
      this.last = newLastNode;
    }
    return newLastNode;
  }

  
}