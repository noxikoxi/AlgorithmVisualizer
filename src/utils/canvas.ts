export const drawSort = (context: CanvasRenderingContext2D, step :number, numbersNum: number, steps: number[][], selectedBarIndex? : number[]) => {
    const canvasWidth = context.canvas.width;
    const canvasHeight = context.canvas.height;
    const barWidth = canvasWidth / numbersNum;
    
    if(steps[step]){
        context.clearRect(0, 0, canvasWidth, canvasHeight);
    
        steps[step].forEach((element, index) => {
            const barHeight = Math.round((canvasHeight-10) / 100 * element);
            const x = index * barWidth;
            const y = canvasHeight - barHeight;
            
            if(selectedBarIndex && index === selectedBarIndex[step])
            {
                context.fillStyle = '#C9CC3F';
            }else{
                context.fillStyle = '#fff';
            }
            
            context.fillRect(x, y, barWidth, barHeight);
        });
    }
}

function drawNode(context: CanvasRenderingContext2D, x: number, y: number, size: number, value: string){
    context.beginPath()
    context.arc(x, y, size, 0, 2*Math.PI);

    context.fillStyle = '#fff';
    context.fill();

    context.fillStyle = '#000';
    context.stroke()

    context.fillText(value, x, y);
}

function drawLine(context: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number){
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.strokeStyle = "black";
    context.stroke();
}

function getNodePosition(context: CanvasRenderingContext2D, index: number, verticalSpacing: number, circleRadius: number) {
    const level = Math.floor(Math.log2(index + 1));  // Tree level
    const nodesAtLevel = Math.pow(2, level);  // Number of nodes
    const positionInLevel = index - nodesAtLevel + 1;
    const x = (context.canvas.width / (nodesAtLevel + 1)) * (positionInLevel + 1);
    const y = verticalSpacing * level + circleRadius + 40;
    return { x, y };
}

export const drawHeapFromArray = (context: CanvasRenderingContext2D, arr: number[]) => {
    const canvasWidth = context.canvas.width;
    const canvasHeight = context.canvas.height;
    const circleRadius = 30;
    const verticalSpacing = 100;

    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.lineWidth = 3;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "25px Roboto ";
    context.fillText("root", canvasWidth/2, 20);

    context.font = "30px Roboto";
    for (let i = 0; i < arr.length; i++) {
        const { x, y } = getNodePosition(context, i, verticalSpacing, circleRadius);

        const leftChildIndex = 2 * i + 1;
        const rightChildIndex = 2 * i + 2;

        if (leftChildIndex < arr.length) {
            const leftChildPos = getNodePosition(context, leftChildIndex, verticalSpacing, circleRadius);
            drawLine(context, x, y, leftChildPos.x, leftChildPos.y);
        }

        if (rightChildIndex < arr.length) {
            const rightChildPos = getNodePosition(context, rightChildIndex, verticalSpacing, circleRadius);
            drawLine(context, x, y, rightChildPos.x, rightChildPos.y);
        }

        drawNode(context, x, y, circleRadius, arr[i].toString());
    }
}
export function drawGraph(context: CanvasRenderingContext2D, edges : {from: number, to :number}[], nodes : {x: number, y: number, label: string}[]) {
    const canvasWidth = context.canvas.width;
    const canvasHeight = context.canvas.height;
    context.clearRect(0, 0, canvasWidth, canvasHeight);

    context.lineWidth=3;
    for (let edge of edges) {
        drawLine(context, nodes[edge.from].x, nodes[edge.from].y, nodes[edge.to].x, nodes[edge.to].y)
    }

    context.font = "25px Roboto ";
    context.textAlign = "center";
    context.textBaseline = "middle";
    for (let node of nodes){
        drawNode(context,node.x, node.y, 30, node.label)
    }
}