import { useEffect, useState } from "react";
import { VisualizationPoints } from "../../algorithms/sorting/config";
import { generateRandomNumbers } from "../../utils/numbers";
import SortBarVisualization from "./SortBarVisualization";

const QuickSortBarVisualization = () => {
    const numbersNum = VisualizationPoints;
    const [numbers, setNumbers] = useState<number[]>(generateRandomNumbers(numbersNum, 1, 100));
    const [steps, setSteps] = useState<number[][]>([]);
    const [selectedBarIdx, setSelectedBarIdx] = useState<number[]>([]);
    
    function quickSort(arr: number[], left: number, right: number, sortSteps: number[][],selectedBar: number[]){
        if(left >= right){
            return;
        }
    
        const partitionIndex = partition(arr, left, right);
        sortSteps.push([...arr]);
        selectedBar.push(partitionIndex);
    
        quickSort(arr, left, partitionIndex-1, sortSteps, selectedBar);
        quickSort(arr, partitionIndex+1, right, sortSteps, selectedBar);
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

    useEffect(() => {
        const sortSteps: number[][] = [];
        const arr = [...numbers];
        const selectedBar: number[] = [-1];
        const len = arr.length;
        sortSteps.push([...arr]);

        quickSort(arr, 0, len-1, sortSteps, selectedBar);

        setSteps(sortSteps);
        setSelectedBarIdx(selectedBar);
    }, [numbers]);

    return (
        <SortBarVisualization 
            steps={steps} 
            setNumbers={setNumbers} 
            numbersNum={numbersNum} 
            stepDescription="Each step represents one parition() call."
            selectedBarIndex={selectedBarIdx}
        />
    )
}

export default QuickSortBarVisualization;