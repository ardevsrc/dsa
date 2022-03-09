class HashTable {

  constructor(size) {
    this.size = size;
    this.table = [];
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) {
      for (let i = 0; i < bucket.length; ++i) {
        if(bucket[i].key === key) {
          return bucket[i].value;
        }
      }
    }

    return undefined;
  }

  
}