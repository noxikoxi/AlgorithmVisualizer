import { useEffect, useState } from "react";
import { generateRandomNumbers } from "../../utils/numbers";
import ArraysBlocksVisualization from "./ArraysBlocksVisualization";

const QuickSortBarVisualization = () => {
    const numbersNum = 10;
    const [numbers, setNumbers] = useState<number[]>(generateRandomNumbers(numbersNum, -20, 20));
    const [divideSteps, setDivideSteps] = useState<number[][][]>([[[]]]);
    const [mergeSteps, setMergeSteps] = useState<number[][][]>([[[]]]);

    function quickSort(arr: number[], steps: number[][][], idx: number=1) : number[]{
        if(arr.length <= 1){
            return arr;
        }

        if(steps.length <= idx){
            steps.push([]);
        }
 
        const pivot = arr[arr.length - 1];
        const left: number[] = [];
        const right: number[] = [];

        for(let i = 0; i < arr.length-1; ++i){  
            if (arr[i] < pivot) {
                left.push(arr[i]);
            }else{
                right.push(arr[i]);
            }
        }
        
        if(left.length > 0){
            steps[idx].push(left);
        }
        steps[idx].push([pivot]);
        if(right.length > 0){
            steps[idx].push(right);
        }
    
        return [...quickSort(left, steps, idx+1), pivot, ...quickSort(right, steps, idx+1)]
    }

    useEffect(() => {
        const steps: number[][][] = [[numbers]];
        const arr = [...numbers];
        const sortedArray = quickSort(arr, steps, 1);
        setMergeSteps([[sortedArray]]);
        setDivideSteps(steps);
    }, [numbers]);

    return (
        <ArraysBlocksVisualization 
            divideSteps={divideSteps} 
            mergeSteps={mergeSteps} 
            headerText={"Quick Sort Visualization"}
            selectedBlocksIndexes="last"
            buttons = {
                <button onClick={() => {
                    setNumbers(generateRandomNumbers(numbersNum, -20, 20));
                    }
                }>
                    Generate
                </button>
            }
        />
    )

}


export default QuickSortBarVisualization;