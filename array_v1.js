class DynamicArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }


  pop() {
    if (this.length === 0) {
      return undefined;
    }

    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  insert(index, item) {
    if (index > this.length - 1 || index < 0) {
      return undefined;
    }

    this.length++;

    for (let i = this.length - 1; i >= index; --i) {
      this.data[i] = this.data[i - 1];
    }

    this.data[index] = item;
    return this.data;
  }

  
}