import { useEffect, useRef, useState } from "react";
import { generateRandomNumbers } from "../../utils/numbers";
import { drawSort } from "../../utils/canvas";

type Props = {
    steps: number[][],
    setNumbers: (arr: number[]) => void,
    numbersNum: number,
    stepDescription? : string
}

const SortBarVisualization = ({steps, setNumbers, numbersNum, stepDescription} : Props) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [step, setStep] = useState<number>(0);

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
            <canvas ref={canvasRef} width={1000} height={500}>

            </canvas>
            <div className="buttons">
                <button onClick={() => {
                    setStep(0);
                    setNumbers(generateRandomNumbers(numbersNum, 1, 100));
                    }
                }>
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
                <span style={{fontSize: 20, paddingLeft: "10px"}}>{stepDescription ? stepDescription : "Each step represents swap of the elements."}</span>
            </div>
        </div>
    )
}


export default SortBarVisualization;