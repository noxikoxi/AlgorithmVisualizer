type Props = {
    elements: number[],
    single : boolean,
    circular: boolean
}

const LinkedListVisualization = ({elements, single, circular} : Props) => {


    return (
        <div className="bordered rounded row" style={{padding: "25px 10px 25px 10px"}}>
            <div className="row" style={{position: "relative", alignItems: "center"}}>
                <div className="col">
                    <span className="listRef">ListRef</span>
                    {!single && <span className="listRef">{circular ? "Last Elem" : "NULL"}</span>}
                </div>
            </div>
            {elements.map((elem, index) => (
                <div className="linkedBlockContainer" key={`${index}-${elem}`}>
                    <div className={`linkedBlock ${!single && "doubleLinkedBLock"}`}>
                        <span>
                            {elem}
                        </span>
                    </div>
                    {!single ? (
                        <>
                            <div className="arrow" style={{top:"25%"}}></div>
                            <div className="arrow revertedArrow" style={{top:"70%", transform: "rotate(180deg)"}}></div>
                        </>
                    ) : (
                        <div className="arrow"></div>
                    )}
                </div>
            ))}
            <div className="row" style={{position: "relative", alignItems: "center"}}>
                <span className="listNull">{circular ? "First Elem": "NULL"}</span>
                <div className="arrow"></div>
            </div>
        </div>
    )
}


export default LinkedListVisualization;