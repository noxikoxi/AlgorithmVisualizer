import { ReactNode } from "react";

type Props = {
    divideSteps: number[][][],
    mergeSteps: number[][][],
    headerText: string,
    buttons?: ReactNode,
    selectedBlocksIndexes? : "last"
}

const ArraysBlocksVisualization = ({divideSteps, mergeSteps, headerText, buttons, selectedBlocksIndexes} : Props) => {
    return (
        <div className="canvasContainer">
            <div className="animationHeader">
                <h1>{headerText}</h1>
            </div>
            <div className="numbersAsBlocksContainer">
                {divideSteps.concat(mergeSteps).map((step, stepIndex) => (
                    <div key={`row${stepIndex}`} className="row">
                    {step.map((array, arrayIndex) => (
                        <div key={`row${stepIndex}array${arrayIndex}`} className="array">
                            {array.map((elem, index) => (
                                <div 
                                    key={`row${stepIndex}array${arrayIndex}elem${index}`} 
                                    className={selectedBlocksIndexes === "last" && array.length > 1 &&  index === array.length-1 && stepIndex != divideSteps.length ? "block selected" : "block"}
                                >
                                    {elem}
                                </div>
                            ))}
                        </div>
                        ))
                    }
                    </div>
                ))}
            </div>
            {buttons && (
                <div className="buttons" style={{marginTop: "10px"}}>
                    {buttons}
                </div>
            )}
        </div>
    )
}

export default ArraysBlocksVisualization;