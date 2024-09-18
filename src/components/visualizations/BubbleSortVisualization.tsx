import { useEffect, useState } from "react";
import { generateRandomNumbers } from "../../utils/numbers"
import { VisualizationPoints } from "../../algorithms/sorting/config";
import SortBarVisualization from "./SortBarVisualization";

const BubbleSortVisualization = () => {
    
    const numbersNum = VisualizationPoints;
    const [numbers, setNumbers] = useState<number[]>(generateRandomNumbers(numbersNum, 1, 100));
    const [steps, setSteps] = useState<number[][]>([]);

    useEffect(() => {
        const steps: number[][] = [];
        let arr = [...numbers];
        const len = arr.length;
        for (let i = 0; i < len - 1; i++) {
            for(let j = 0; j < len - 1 - i; j++)
            {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    steps.push([...arr]);
                }
            }
        }

        setSteps(steps);
    }, [numbers]);


    return (
        <SortBarVisualization steps={steps} setNumbers={setNumbers} numbersNum={numbersNum}/>
    )
}

export default BubbleSortVisualization