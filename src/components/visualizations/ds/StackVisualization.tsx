import {generateRandomNumbers} from "../../../utils/numbers";
import {MoveRight} from "lucide-react";

const StackVisualization = () => {

    const elements = generateRandomNumbers(4, 10, 99);

    return (
        <div className="row stackVisualizationContainer">
            <div className="bordered stackContainer">
                <span className="topIndicator">Top</span>
                <div className="col" style={{gap:2}}>
                    {elements.map((elem, index) => (
                        <div key={`1-${index}`} className={index === 0 ? "invisibleElem" : "elem"}>{elem}</div>
                    ))}
                </div>
            </div>
            <div className="col" style={{gap:0}}>
                <span>Push()</span>
                <MoveRight size={35}/>
            </div>
            <div className="bordered stackContainer">
                <span className="topIndicator">Top</span>
                <div className="col" style={{gap:2}}>
                    {elements.map((elem, index) => (
                        <div key={`2-${index}`} className="elem">{elem}</div>
                    ))}
                </div>
            </div>
            <div className="col" style={{gap:0}}>
                <span>Pop()</span>
                <MoveRight size={35}/>
            </div>
            <div className="bordered stackContainer">
                <span className="topIndicator">Top</span>
                <div className="col" style={{gap:2}}>
                    {elements.map((elem, index) => (
                        <div key={`3-${index}`} className={index === 0 ? "invisibleElem" : "elem"}>{elem}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default  StackVisualization;