class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Get the index of the parent node
  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  // Swap two elements in the heap
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Insert a new value into the heap
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  // Heapify up to maintain the min-heap property
  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0 && this.heap[index] < this.heap[this.parentIndex(index)]) {
      this.swap(index, this.parentIndex(index));
      index = this.parentIndex(index);
    }
  }

  // Get the minimum element (root of the heap)
  getMin() {
    return this.heap[0] || null;
  }
}

######################################### 

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // Get the index of the parent node
  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // Swap two elements in the heap
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Insert a new value into the heap
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  // Heapify up to maintain the max-heap property
  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0 && this.heap[index] > this.heap[this.parentIndex(index)]) {
      this.swap(index, this.parentIndex(index));
      index = this.parentIndex(index);
    }
  }

  // Get the maximum element (root of the heap)
  getMax() {
    return this.heap[0] || null;
  }
}
