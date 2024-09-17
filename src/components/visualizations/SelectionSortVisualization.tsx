import { useEffect, useRef, useState } from "react";
import { generateRandomNumbers } from "../../utils/numbers";
import { drawSort } from "../../utils/canvas";
import { VisualizationPoints } from "../../algorithms/sorting/config";


const SelectionSortVisualization = () => {

    const numbersNum = VisualizationPoints;
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [numbers, setNumbers] = useState<number[]>(generateRandomNumbers(numbersNum, 1, 100));
    const [step, setStep] = useState<number>(0);
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
            if (lowestValueIndex != i) {
                [arr[lowestValueIndex], arr[i]] = [arr[i], arr[lowestValueIndex]];
                steps.push([...arr]);
            }
        }

        setSteps(steps);
    }, [numbers]);

    useEffect(() => {
        const canvas = canvasRef.current;

        if(canvas) {
            const context = canvas.getContext('2d');
            if(context){
                drawSort(context, step, numbersNum, steps);
            }
        }

    }, [step, steps])

    return (
        <div className="canvasContainer">
            <div className="animationHeader">
                <h1>Animation</h1>
                <h1>Step: {step}/{steps.length-1}</h1>
            </div>
            <canvas ref={canvasRef}>

            </canvas>
            <div className="buttons">
                <button onClick={() => {
                    setStep(0);
                    setNumbers(generateRandomNumbers(numbersNum, 1, 100));
                    }
                }
                    >
                    Generate
                </button>
                <button 
                    className="next" 
                    onClick={() => {
                        if(step < steps.length-1){
                            setStep(step+1);
                        }
                    }}>
                    Next
                </button>
                <button 
                    className="previous" 
                    onClick={() => {
                        if(step > 0){
                            setStep(step-1);
                        }
                    }}>
                    Previous
                </button>
                <button onClick={() => setStep(0)} className="danger">
                    Reset
                </button>
                <span style={{fontSize: 20, paddingLeft: "10px"}}>Each step represents swap of the elements.</span>
            </div>
        </div>

    )
}


export default SelectionSortVisualization;