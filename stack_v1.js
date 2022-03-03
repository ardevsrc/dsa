class Stack {
  #list = new Map();
  #maxSize = null;

  constructor(maxSize) {
    this.#maxSize = Number(maxSize) || null;
  }

  get size() {
    return this.#list.size;
  }

  push(item) {
    if (!this.#maxSize || this.size < this.#maxSize) {
      this.#list.set(this.size, item);
    }
    return this.size;
  }

  pop() {
    if (this.size) {
      const lastItem = this.#list.get(this.size - 1);
      this.#list.delete(this.size - 1);
      return lastItem;
    }
    return null;
  }

}