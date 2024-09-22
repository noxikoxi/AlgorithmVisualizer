import { useEffect, useState } from "react";
import { generateRandomNumbers } from "../../utils/numbers";
import { VisualizationPoints } from "../../algorithms/sorting/config";
import SortBarVisualization from "./SortBarVisualization";


const SelectionSortVisualization = () => {

    const numbersNum = VisualizationPoints;
    const [numbers, setNumbers] = useState<number[]>(generateRandomNumbers(numbersNum, 1, 100));
    const [steps, setSteps] = useState<number[][]>([]);

    useEffect(() => {
        const steps: number[][] = [];
        let arr = [...numbers];
        const len = arr.length;
        for (let i = 0; i < len - 1; i++) {
            let lowestValueIndex = i;
            for(let j = i+1; j < len; j++)
            {
                if (arr[j] < arr[lowestValueIndex]) {
                    lowestValueIndex = j;
                }

                if (arr[j] > arr[j + 1]) {      
                }
            }
            // Swap the elements
            if (lowestValueIndex !== i) {
                [arr[lowestValueIndex], arr[i]] = [arr[i], arr[lowestValueIndex]];
                steps.push([...arr]);
            }
        }

        setSteps(steps);
    }, [numbers]);

    return (
        <SortBarVisualization steps={steps} setNumbers={setNumbers} numbersNum={numbersNum}/>
    )
}


export default SelectionSortVisualization;