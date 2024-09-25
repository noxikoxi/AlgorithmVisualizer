import {VisualizationPoints} from "../../algorithms/sorting/config";
import {useEffect, useState} from "react";
import {generateRandomNumbers} from "../../utils/numbers";
import {buildHeap, heapify} from "../../algorithms/sorting/sort";
import SortBarVisualization from "./SortBarVisualization";

const HeapSortBarVisualization = () => {
    const numbersNum = VisualizationPoints;
    const [numbers, setNumbers] = useState<number[]>(generateRandomNumbers(numbersNum, 1, 100));
    const [steps, setSteps] = useState<number[][]>([]);

    function heapSort(arr:number[], sortSteps: number[][]){
        buildHeap(arr);
        sortSteps.push([...arr]);

        for(let i = arr.length-1; i >=1; --i){
            [arr[0], arr[i]] = [arr[i], arr[0]];
            heapify(arr, i, 0);
            sortSteps.push([...arr]);
        }
    }

    useEffect(() => {
        const sortSteps: number[][] = [];
        const arr = [...numbers];
        sortSteps.push([...arr]);

        heapSort(arr, sortSteps);

        setSteps(sortSteps);
    }, [numbers]);

    return (
        <SortBarVisualization
            steps={steps}
            setNumbers={setNumbers}
            numbersNum={numbersNum}
            stepDescription="Each step represents one step in heap sort loop call. (The second one is after buildHeap call)"
        />
    )
}

export default HeapSortBarVisualization;