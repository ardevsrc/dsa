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

  
}