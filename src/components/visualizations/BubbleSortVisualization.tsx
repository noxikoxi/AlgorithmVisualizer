import { useEffect, useRef, useState } from "react";
import { generateRandomNumbers } from "../../utils/numbers"

type Props = {
    numbersNum: number
}

const BubbleSortVisualization = ({numbersNum} : Props) => {
    
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [numbers, setNumbers] = useState<number[]>(generateRandomNumbers(numbersNum, 1, 100));
    const [step, setStep] = useState<number>(0);
    const [steps, setSteps] = useState<number[][]>([]);

    const draw = (context: CanvasRenderingContext2D) => {
        const canvasWidth = context.canvas.width;
        const canvasHeight = context.canvas.height;
        const barWidth = canvasWidth / numbersNum;
        
        if(steps[step]){
            context.clearRect(0, 0, canvasWidth, canvasHeight);
        
            steps[step].forEach((element, index) => {
                const barHeight = Math.round((canvasHeight-10) / 100 * element);
                const x = index * barWidth;
                const y = canvasHeight - barHeight;

                context.fillStyle = '#fff';
                context.fillRect(x, y, barWidth, barHeight);
            });
        }
    }

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

    useEffect(() => {
        const canvas = canvasRef.current;

        if(canvas) {
            const context = canvas.getContext('2d');
            if(context){
                draw(context);
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

export default BubbleSortVisualization