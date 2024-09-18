import { useEffect, useState } from "react";
import { VisualizationPoints } from "../../algorithms/sorting/config";
import SortBarVisualization from "./SortBarVisualization";
import { generateRandomNumbers } from "../../utils/numbers";

const InsertionSortVisualization = () => {
    const numbersNum = VisualizationPoints;
    const [numbers, setNumbers] = useState<number[]>(generateRandomNumbers(numbersNum, 1, 100));
    const [steps, setSteps] = useState<number[][]>([]);

    useEffect(() => {
        const steps: number[][] = [];
        let arr = [...numbers];
        const len = arr.length;
        for (let i = 0; i < len; ++i) {
            const elem = arr[i];
            let j  = i-1;
            while(j >= 0 && arr[j] > elem){
                arr[j+1] = arr[j];
                --j;                
            }
            arr[j+1] = elem;
            steps.push([...arr]);
        }

        setSteps(steps);
    }, [numbers]);

    return (
        <SortBarVisualization steps={steps} setNumbers={setNumbers} numbersNum={numbersNum}/>
    )
}

export default InsertionSortVisualization;