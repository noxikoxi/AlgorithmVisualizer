type Props = {
    elements: number[];
    shorten?: boolean
}

const ArrayVisualization = ({elements, shorten=false} : Props) => {
    return (
        <div className={shorten ? "array shorten" : "array"}>
            {elements.map((elem, index) => (
                <div key={index} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <div className={shorten ? "elem shorten" : "elem"} >
                        <span>{elem}</span>
                    </div>
                    <span className={shorten ? "elemIdx shorten" : "elemIdx"}>{index}</span>
                </div>
            ))}
        </div>
    )
}

export default ArrayVisualization;