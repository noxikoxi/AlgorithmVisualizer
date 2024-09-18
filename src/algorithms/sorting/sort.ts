export function bubbleSort(arr : number[]){
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

export function selectionSort(arr: number[]){
    const n = arr.length;
    for(let i = 0; i < n-1; ++i){
        let lowestValueIndex = i;
        for(let j = i+1; j < n; ++j){
            if(arr[j] < arr[lowestValueIndex]){
                lowestValueIndex = j;
            }
        }
        // Swap the elements
        if(lowestValueIndex != i){
            let tmp = arr[i];
            arr[i] = arr[lowestValueIndex];
            arr[lowestValueIndex] = tmp;
        }
    }

    return arr;
}

export function insertionSort(arr: number[]) {
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