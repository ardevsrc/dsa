class Queue {
  #list = [];
  #capacity = null;

  constructor(capacity) {
    this.#capacity = Math.max(Number(capacity), 0) || null;
  }

  get size() {
    return this.#list.length;
  }

  get isFull() {
    return this.#capacity !== null && this.size === this.#capacity;
  }
  
  get isEmpty() {
    return this.size === 0;
  }

}