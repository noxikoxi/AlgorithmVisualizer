import {useEffect, useRef} from "react";
import {drawHeapFromArray} from "../../../utils/canvas";

type Props = {
    heap: number[];
}

const HeapTreeVisualization = ({heap} : Props) => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if(canvas) {
            const context = canvas.getContext('2d');
            if(context){
                drawHeapFromArray(context, heap);
            }
        }
    }, [heap]);

    return (
        <div className="canvasContainer" style={{paddingTop:0, paddingBottom: 0}}>
            <canvas ref={canvasRef} width={600} height={500} style={{imageRendering: "crisp-edges"}}>

            </canvas>
        </div>
    )
}

export default HeapTreeVisualization;