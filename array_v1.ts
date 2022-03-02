interface HashTable {
  [key: number]: any;
}

class DynamicArray {
  length: number;
  data: HashTable;

  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index: number): any {
    return this.data[index];
  }

  push(value: any): number {
    this.data[this.length] = value;
    this.length++;
    return this.length;
  }

  pop(): any {
    if (this.length === 0) {
      return undefined;
    }

    const removedItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;

    return removedItem;
  }

  insert(index: number, value: any): HashTable {
    if (index > this.length - 1 || index < 0) {
      return undefined;
    }

    this.length++;

    for (let i = this.length - 1; i < index; --i) {
      this.data[i] = this.data[i - 1];
    }

    this.data[index] = value;
    return this.data;
  }


}