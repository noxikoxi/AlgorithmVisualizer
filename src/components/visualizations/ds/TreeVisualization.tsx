import {useEffect, useRef} from "react";
import {drawGraph} from "../../../utils/canvas";
import {treeVisualizationEdges,treeVisualizationNodes} from "../../../algorithms/data-structures/config";

const TreeVisualization = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if(canvas) {
            const context = canvas.getContext('2d');
            if(context){
                drawGraph(context, treeVisualizationEdges, treeVisualizationNodes)
            }
        }
    }, );

    return (
        <div className="canvasContainer" style={{paddingTop:0, paddingBottom: 0}}>
            <canvas ref={canvasRef} width={600} height={500} style={{imageRendering: "crisp-edges"}}>

            </canvas>
        </div>
    )
}

export default TreeVisualization;