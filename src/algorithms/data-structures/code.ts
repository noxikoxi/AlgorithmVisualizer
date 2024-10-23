export function bubbleUpMaxHeap(heap: number[]) {
    let index = heap.length - 1;
    const element = heap[index];

    while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        const parent = heap[parentIndex];

        if (parent >= element) break;

        heap[index] = parent;
        index = parentIndex;
    }

    heap[index] = element;
}