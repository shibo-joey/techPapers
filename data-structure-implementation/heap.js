// Min Heap
class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  // Get parent and children indexes
  getParentIndex(i) { return Math.floor((i - 1) / 2); }
  getLeftChildIndex(i) { return 2 * i + 1; }
  getRightChildIndex(i) { return 2 * i + 2; }

  // Swap helper
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Insert an element into the priority queue
  enqueue(value, priority) {
    this.heap.push({ value, priority });
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex].priority <= this.heap[index].priority) break;
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  // Remove and return the highest priority element
  dequeue() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return root;
  }

  bubbleDown() {
    let index = 0;
    while (true) {
      let leftIndex = this.getLeftChildIndex(index);
      let rightIndex = this.getRightChildIndex(index);
      let smallest = index;

      if (leftIndex < this.heap.length && this.heap[leftIndex].priority < this.heap[smallest].priority) {
        smallest = leftIndex;
      }
      if (rightIndex < this.heap.length && this.heap[rightIndex].priority < this.heap[smallest].priority) {
        smallest = rightIndex;
      }
      if (smallest === index) break;

      this.swap(index, smallest);
      index = smallest;
    }
  }

  // Check the highest priority element
  peek() {
    return this.heap.length ? this.heap[0] : null;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.heap.length === 0;
  }

  // Get queue size
  size() {
    return this.heap.length;
  }
}
