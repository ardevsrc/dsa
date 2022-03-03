class Stack {
  #list = new Map();
  #maxSize = null;

  constructor(maxSize) {
    this.#maxSize = Number(maxSize) || null;
  }
  
}