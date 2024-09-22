export function bubbleSort(arr : number[]): number[]{
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
}

export function selectionSort(arr: number[]): number[]{
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

export function insertionSort(arr: number[]): number[] {
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

export function merge(left: number[], right: number[]) : number[]{
    const result: number[] = [];
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


export function mergeSort(arr: number[]) : number[]{
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
}

export function inPlaceMergeSort(arr:number[], start: number = 0, end : number = arr.length-1){
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

export function inPlaceMerge(arr:number[], start: number, mid: number, end: number){
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

export function quickSort(arr: number[]){
    _quickSort(arr, 0, arr.length-1);
}

function _quickSort(arr: number[], left: number, right: number){
    if(left >= right){
        return
    }

    const partitionIndex = partition(arr, left, right);

    _quickSort(arr, left, partitionIndex-1);
    _quickSort(arr, partitionIndex+1, right);
}

function partition(arr: number[], left: number, right: number): number {

    const pivot = arr[right];

    let i = left-1;

    for(let j = left; j < right; ++j){
        if(arr[j] < pivot){
            ++i;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i+1], arr[right]] = [arr[right], arr[i+1]];
    return i+1;
}