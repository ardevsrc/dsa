class Node {
  data: any;
  prev: Node | null;

  constructor(data: any) {
    this.data = data;
    this.prev = null;
  }
}