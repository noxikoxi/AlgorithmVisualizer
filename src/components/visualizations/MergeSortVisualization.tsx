import { useEffect, useState } from "react";
import { generateRandomNumbers } from "../../utils/numbers";

const MergeSortVisualization = () => {

    const numbersNum = 10;
    const [numbers, setNumbers] = useState<number[]>(generateRandomNumbers(numbersNum, -20, 20));
    const [divideSteps, setDivideSteps] = useState<number[][][]>([[[]]]);
    const [mergeSteps, setMergeSteps] = useState<number[][][]>([[[]]]);

    function merge(left: number[], right: number[]) : number[]{
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
    
    function mergeSort(arr: number[], steps : number[][][], idx: number=1, mSteps : number[][][]) : number[]{
        if(arr.length <= 1){
            return arr
        }
        if(steps.length <= idx){
            steps.push([]);
        }
        
    
        // Divide the array
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);

        steps[idx].push(left);
        steps[idx].push(right);                                                                    
    
        // Sort
        const sortedLeft = mergeSort(left, steps, idx+1, mSteps);
        const sortedRight = mergeSort(right, steps, idx+1, mSteps);
        
        const mergedArray = merge(sortedLeft, sortedRight);
        if(mSteps.length === 0){
            for(let i=0; i < idx+2; i++){
                mSteps.push([]);
            }
        }
        mSteps[idx].push(mergedArray);
        return mergedArray;
    }

    useEffect(() => {
        const steps: number[][][] = [[numbers]];
        const mSteps: number[][][] = [];
        let arr = [...numbers];
        mergeSort(arr, steps, 1, mSteps);
        setMergeSteps(mSteps.reverse());
        setDivideSteps(steps);
    }, [numbers]);
    
    return (
        <div className="canvasContainer">
            <div className="animationHeader">
                <h1>Merge Sort Visualization</h1>
            </div>
            <div className="numbersAsBlocksContainer">
                {divideSteps.concat(mergeSteps).map((step, stepIndex) => (
                    <div key={`row${stepIndex}`} className="row">
                    {step.map((array, arrayIndex) => (
                        <div key={`row${stepIndex}array${arrayIndex}`} className="array">
                            {array.map((elem, index) => (
                                <div key={`row${stepIndex}array${arrayIndex}elem${index}`} className="block">{elem}</div>
                            ))}
                        </div>
                        ))
                    }
                    </div>
                ))}
            </div>
            <div className="buttons" style={{marginTop: "10px"}}>
                <button onClick={() => {
                    setNumbers(generateRandomNumbers(numbersNum, -20, 20));
                    }
                }>
                    Generate
                </button>
            </div>
        </div>
    )
}


export default MergeSortVisualization;