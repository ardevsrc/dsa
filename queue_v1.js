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
  
}