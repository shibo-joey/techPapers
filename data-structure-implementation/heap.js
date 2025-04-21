// Min Heap
class Heap {
    constructor(compare) {
        this.data = [];
        this.compare = compare;
    }

    size() {
        return this.data.length;
    }

    peek() {
        return this.data[0];
    }

    push(val) {
        this.data.push(val);
        this._siftUp(this.data.length - 1);
    }

    pop() {
        if (this.size() === 1) return this.data.pop();
        const top = this.peek();
        this.data[0] = this.data.pop();
        this._siftDown(0);
        return top;
    }

    _siftUp(i) {
        let parent = Math.floor((i - 1) / 2);
        while (i > 0 && this.compare(this.data[i], this.data[parent]) < 0) {
            [this.data[i], this.data[parent]] = [this.data[parent], this.data[i]];
            i = parent;
            parent = Math.floor((i - 1) / 2);
        }
    }

    _siftDown(i) {
        let n = this.size(), left, right, smallest;
        while (true) {
            left = 2 * i + 1;
            right = 2 * i + 2;
            smallest = i;

            if (left < n && this.compare(this.data[left], this.data[smallest]) < 0) smallest = left;
            if (right < n && this.compare(this.data[right], this.data[smallest]) < 0) smallest = right;

            if (smallest !== i) {
                [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];
                i = smallest;
            } else break;
        }
    }
}

let small = new Heap((a, b) => b - a); // max-heap
let large = new Heap((a, b) => a - b); // min-heap
