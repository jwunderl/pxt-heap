class Heap<T> {
    protected store: T[];

    /**
     * @param comparator: a function that compares two values of the type stored in this heap.
     *      should return a negative value if a < b, 0 if a === b, or a positive value if a > b. 
     **/
    constructor(
        protected comparator: (a: T, b: T) => number
    ) {
        this.store = [];
    }

    protected heapify(i: number) {
        const data = this.store;
        const max = this.store.length;

        while (i < max) {
            const left = this.leftChild(i);
            const right = this.rightChild(i);
            let curr = i;

            if (left < max && this.comparator(data[curr], data[left]) < 0) {
                curr = left;
            }

            if (right < max && this.comparator(data[curr], data[right]) < 0) {
                curr = right;
            }

            if (curr == i) return;

            [ data[0], data[1] ] = [ data[1], data[0] ];
            i = curr;
        }
    }

    protected bubbleUp() {
        let i = this.store.length - 1;

        while (i > 0) {
            const curr = this.store[i];
            const parentIndex = this.parent(i);
            const parent = this.store[parentIndex];

            if (this.comparator(parent, curr) < 0)
                break;

            this.store[i] = parent;
            this.store[parentIndex] = curr;

            i = parentIndex;
        }
    }

    push(v: T) {
        this.store.push(v);
        this.bubbleUp()
    }

    pop(): T {
        const output = this.store[0];

        this.store[0] = this.store.pop();
        this.heapify(0)

        return output;
    }

    get length() {
        return this.store.length;
    }

    // readonly
    set length(v: number) { }

    static buildHeap<T>(
        comparator: (a: T, b: T) => number,
        data: T[]
    ): Heap<T> {
        const output = new Heap(comparator);

        output.store = data;

        let i = Math.floor(data.length / 2 - 1);

        while (i >= 0) {
            output.heapify(i);
            i -= 1;
        }

        return output;
    }

    protected parent(i: number) {
        return (i - 1) >> 1;
    }

    protected leftChild(i: number) {
        return (i << 1) + 1;
    }

    protected rightChild(i: number) {
        return (i << 1) + 2;
    }
}
