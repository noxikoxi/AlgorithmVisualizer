import {useEffect, useRef, useState} from "react";
import {drawHeapFromArray} from "../../../utils/canvas";
import {bubbleUpMaxHeap} from "../../../algorithms/data-structures/code";
import {heapify} from "../../../algorithms/sorting/sort";

const BuildingHeapAnimation = () => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [numbers, setNumbers] = useState<number[]>([]);
    const [number, setNumber] = useState<string>("");

    const addToHeap = () => {
        let temp = [...numbers, Number(number)];
        bubbleUpMaxHeap(temp);
        setNumbers(temp);
    }

    const extractFromHeap = () => {
        if(numbers.length === 1){
            setNumbers([]);
        }
        else if(numbers.length > 1){

            let temp = [numbers[numbers.length-1], ...numbers.slice(1, numbers.length-1)];
            heapify(temp, temp.length,  0);

            setNumbers(temp);
        }
    }

    useEffect(() => {
        const canvas = canvasRef.current;

        if(canvas) {
            const context = canvas.getContext('2d');
            if(context){
                drawHeapFromArray(context, numbers);
            }
        }
    }, [numbers]);

    return (
        <div className="canvasContainer" style={{paddingTop:0, marginBottom: 10}}>
            <canvas ref={canvasRef} width={800} height={600} style={{imageRendering: "crisp-edges"}}>

            </canvas>
            <div className="buttons sm-col centered" style={{display: "flex"}}>
                <div style={{display: "flex", gap: 10}}>
                    <input
                        style={{width: 100}}
                        value={number}
                        type="text"
                        placeholder="number"
                        onChange={(event) => setNumber(event.target.value)}>
                    </input>
                    <button className="next"  onClick={() => addToHeap()}>
                        Insert
                    </button>
                </div>
                <button style={{backgroundColor: "var(--primary)"}} onClick={() => extractFromHeap()}>
                    Extract root
                </button>
                <button className="danger" onClick={() => setNumbers([])}>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default BuildingHeapAnimation;