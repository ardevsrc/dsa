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
  
}