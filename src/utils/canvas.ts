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