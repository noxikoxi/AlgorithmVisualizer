export const bubbleSortDescription = "Simple comparison-based, stable sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The process is repeated until the list is sorted. The algorithm gets its name because smaller elements 'bubble' to the top of the list (beginning) with each pass, much like bubbles rising in water.";
export const bubbleSortTodo = [
"Start at the beginning of the list.",
`Compare the first two elements:
- If the first element is greater than the second, swap them.
- If not, move to the next pair.`,
"Continue comparing and swapping adjacent elements until the end of the list is reached. This completes one 'pass'.",
`Repeat the process for the remaining unsorted part of the list:
- After each pass, the largest unsorted element is placed in its correct position at the end of the list.`
]

export const bubbleSortText = `function bubbleSort(arr){
    const n = arr.length;
    for(let i = 0; i < n-1; ++i){
        for(let j = 0; j < n-1-i; ++j){
            if(arr[j] > arr[j+1]){
                // Swap the elements
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }

    return arr;
}`;

export const selectionSortDescription = "Selection Sort is a straightforward, stable comparison-based sorting algorithm. It works by repeatedly selecting the smallest (or largest, depending on the order) element from the unsorted portion of the list and placing it in the correct position. Although its not the most efficient for large datasets, it’s easy to understand and implement, making it a good learning tool for basic sorting concepts."
export const selectionSortTodo = [
    "Iterate through array and find the highest value [or the lowest]",
    "Swap it with the first index of the array",
    "Now iterate through array again, but start from the next index",
    "Swap found value with the index you started searching from",
    "Repeat this untill the last index of array",
    "After each pass one element is inserted in it's correct position"
]

export const selectionSortText = `function selectionSort(arr){
    const n = arr.length;
    for(let i = 0; i < n-1; ++i){
        let lowestValueIndex = i;
        for(let j = i+1; j < n; ++j){
            if(arr[j] < arr[lowestValueIndex]){
                lowestValueIndex = j;
            }
        }
        // Swap the elements
        if(lowestValueIndex !== i){
            let tmp = arr[i];
            arr[i] = arr[lowestValueIndex];
            arr[lowestValueIndex] = tmp;
        }
    }

    return arr;
}
`;

export const insertionSortDescription = "Insertion sort is a simple, intuitive, stable and easy to implement sorting algorithm that builds the sorted array one item at a time. The algorithm iterates through the array, taking one unsorted element in each pass and inserting it into its correct position relative to the already sorted elements. The difference betweeen Selection Sort and Insertion Sort is that after each pass in Selection sort an element will be in its 'absolute' correct position, when in Insertion Sort this element will be in its relative correct position. Meaning each element is shifted to the left untill the next element is greater/lower."
export const insertionSortTodo = [
    "Algorithm starts considering the first element is already sorted",
    "Then it picks the next unsorted element and compares it with the elements before it (already sorted)",
    "It shifts all elements that are greater/lower one position to the right",
    "After it slected element is inserted in it's correct position",
    "This process repeats for all elements until the entire arrays is sorted",
    "In each step array is sorted to the select item first position",
    "On the other hand we can say that selected element is shifted to the left untill the next element is greater/lower"
]

export const insertionSortText = `insertionSort(arr){
    const len = arr.length;
    for (let i = 1; i < len; ++i){
        const elem = arr[i];
        let j = i-1;

        while(j >= 0 && arr[j] > elem)
        {
            // Shift elements 
            arr[j+1] = arr[j];
            --j;
        }
        // Insert selected element
        arr[j+1] = elem;
    }
    return arr;
}
`;

export const mergeSortDescription = "Merge sort is a stable sorting algorithm that uses 'divide and conquer' approach. It works by recursively dividing the array into smaller subarrays until each subarray has only one element. Then it starts merging those subarrays creating one from two, where the new array is sorted. The merge step ensures that each merged array is sorted. This algorithm is particulary effective for large datasets."
export const mergeSortTodo = [
    "If the array has more that one element divide it into two halves",
    "Repeat this process for each created new subarray",
    `Once each subarray has only one element start merging then.
- Compare elements of the two halves and merge then in sorted order (Append the lowest element from arrays into new one until every element is considered)`,
    "Continue merging the subarrays untill there is only one, full sorted arrays"
]

export const mergeSortText = `function mergeSort(arr){
    if(arr.length <= 1){
        return arr
    }

    // Divide the array
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Sort
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
`;

export const mergeText = `function merge(left, right){
    const result = [];
    let i = 0;
    let j = 0;

    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            result.push(left[i])
            ++i;
        }else{
            result.push(right[j])
            ++j;
        }
    }

    // Append remaining elements
    while(i < left.length){
        result.push(left[i]);
        ++i;
    }
    while(j < right.length){
        result.push(right[j]);
        ++j;
    }
    
    return result;
}
`;

export const inPlaceMergeSortDescription = "In merge sort new arrays are created using auxiliary space. However the same effect can be achieved without creating them, resulting in O(1) space complexity. Dividing they array can be done using indexes, so apart from creating new array, indexes can be passed as parameters (begin, middle, end)."
export const inPlaceMergeSortAdditional = `<span>Be aware that presented approach makes time complexity worse, because O( n<span style="vertical-align: super; font-size: smaller;">2</span> ) is needed for merging. Resulting in overall time complexity O(n<span style="vertical-align: super; font-size: smaller;">2</span> * log<span style="vertical-align: sub; font-size: smaller">2</span>n )</span>.`;

export const inPlaceMergeSortText = `function inPlaceMergeSort(arr, start = 0, end = arr.length-1){
    if(start >= end){
        return;
    }

    const mid = start + Math.floor((end - start) / 2);
    // Sort
    inPlaceMergeSort(arr, start, mid);
    inPlaceMergeSort(arr, mid+1, end);

    // Merge
    inPlaceMerge(arr, start, mid, end);
}
`;

export const inPlaceMergeText = `function inPlaceMerge(arr, start, mid, end){
    let rightIndex = mid+1;

    // Already sorted
    if(arr[mid] <= arr[rightIndex]){
        return;
    }

    while(start <= mid && rightIndex <= end){

        // Correct place
        if(arr[start] <= arr[rightIndex]){
            ++start;
        }else{
            const val = arr[rightIndex];
            let index = rightIndex;
            
            // Shift elements to the right
            while (index !== start){
                arr[index] = arr[index-1];
                --index;
            }

            arr[start] = val;
            ++start;
            ++mid;
            ++rightIndex;
        }
        
    }

}
`;

export const quickSortDescription = "Quick Sort is unstable sorting algorithm based on divide and conquer approach. It selects a pivot element and divide array according to it, inserting pivot in its correct position. After this step quick sort is repeated for two subarrays. Selecting pivot is really important, because bad choice affects the perfomance, however the algorithm would still works. The pivot can be chosen in serveral ways, usually picking the first element, last element, median or random one.";
export const quickSortTodo = [
    "The first step is choosing a pivot element",
    "Divide the array is such way that pivot is in its correct position, all elements on the left are smaller and on the right are greater",
    "Repeat this procedure revursive untill array is not sorted"
];

export const quickSortAdditional = `<span>Space complexity differs based on implementation. In presented approach quick sort is made in-place meaning no extra space for subarrays is needed, therefore only recursion stack needs memory. Still in the worst situation, constantly selecting smallest or largest element as pivot space complexity would be O( n<span style="vertical-align: super; font-size: small;">2</span> ). However space complexity in average case when pivot divides array in half is shown below.</span>.`;

export const quickSortText = `function quickSort(arr, left, right){
    if(left >= right){
        return;
    }

    const partitionIndex = partition(arr, left, right);

    quickSort(arr, left, partitionIndex-1);
    quickSort(arr, partitionIndex+1, right);
}
`;

export const partitionText = `partition(arr, left, right){
    const pivot = arr[right];

    let i = left-1;

    for(let j = left; j < right; ++j){
        if(arr[j] < pivot){
            ++i;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i+1], arr[right]] = [arr[right], arr[i+1]];

    // Pivot index
    return i+1;
}
`;

export const heapSortDescription = "Heap sort is in-place, comparison-based, not stable sorting algorithm that uses a binary heap data structure to sort elements. It is renowned for its efficiency, particularly when memory usage is critical as it not require additional space proportional to input array. Algorithm is based on building a heap and then sorting elements. ";
export const heapSortTodo = [
"The first step is to transfer the input array into a heap. To do this typically we use heapify process",
"- Select a parent node (root of a subtree)",
"- Compare parent with its children and swap them if needed (child bigger than parent in max-heap or lower in min-heap)",
"- Call heapify for modified subtree",
"Repeat this process for each parent starting from index n/2 - 1 to index 0; it needs to be an integer so use integer division (e.g. 7/3 = 2)",
"When the heap is build, start building sorted array",
"- The biggest/lowest element will be on index 0, swap it with the last element",
"- Then call heapify method on ensure the rest of the array is a heap (call it for array[0:n-1]",
"Repeat this process until the heap is empty"
];

export const heapSortText=`function heapSort(arr){
    buildHeap(arr);
    
    for(let i = arr.length-1; i >=1; --i){
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
}`;

export const buildHeapText=`function buildHeap(arr){
    for(let i = Math.floor(arr.length / 2) - 1; i >= 0; --i){
        heapify(arr, arr.length, i);
    }
}`;

export const heapifyText = `function heapify(arr, heapLen, nodeIdx){
    let largest = nodeIdx;
    const left = 2 * nodeIdx+1;
    const right = 2 * nodeIdx+2;

    if(left < heapLen && arr[left] > arr[largest]){
        largest = left;
    }

    if(right < heapLen && arr[right] > arr[largest]){
        largest = right;
    }

    if(largest != nodeIdx){
        [arr[nodeIdx], arr[largest]] = [arr[largest], arr[nodeIdx]];
        heapify(arr, heapLen, largest)
    }
}`;

export const heapSortAdditional = `<span>Heapify process has O(n) time complexity. To sort elements in different order you should use min-heap instead of max-heap. Space Complexity for heap sort depends on the implementation, it is possible to reduce it to O(1) using iterative approach instead of recursion (needs memory for call stack).</span>`;
