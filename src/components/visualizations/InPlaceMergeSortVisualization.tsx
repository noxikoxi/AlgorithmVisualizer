import { useEffect, useState } from "react";
import SortBarVisualization from "./SortBarVisualization";
import { generateRandomNumbers } from "../../utils/numbers";
import { VisualizationPoints } from "../../algorithms/sorting/config";

const InPlaceMergeSortVisualization = () => {
    const numbersNum = VisualizationPoints;
    const [numbers, setNumbers] = useState<number[]>(generateRandomNumbers(numbersNum, 1, 100));
    const [steps, setSteps] = useState<number[][]>([]);

    function inPlaceMergeSort(arr:number[], start: number = 0, end : number = arr.length-1, steps: number[][]){
        if(start >= end){
            return;
        }
    
        const mid = start + Math.floor((end - start) / 2);
        // Sort
        inPlaceMergeSort(arr, start, mid, steps);
        inPlaceMergeSort(arr, mid+1, end, steps);
    
        // Merge
        inPlaceMerge(arr, start, mid, end);
        if(start < mid){
            steps.push([...arr]);
        }
    }

    function inPlaceMerge(arr:number[], start: number, mid: number, end: number){
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

    useEffect(() => {
        const steps: number[][] = [];
        let arr = [...numbers];
        inPlaceMergeSort(arr, 0, arr.length-1, steps);

        setSteps(steps);
    }, [numbers]);
    
    return (
        <SortBarVisualization steps={steps} setNumbers={setNumbers} numbersNum={numbersNum} stepDescription="Each step represents merge."/>
    )
}

export default InPlaceMergeSortVisualization;