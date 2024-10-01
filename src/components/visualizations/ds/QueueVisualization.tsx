import {generateRandomNumbers} from "../../../utils/numbers";
import {MoveRight} from "lucide-react";

const QueueVisualization = () => {

    const elements = generateRandomNumbers(4, 10, 99);
    const randomAdd = generateRandomNumbers(1, 10, 99);

    return (
        <div className="col md-row" style={{gap:20, alignItems: "center"}}>
            <div className="row bordered rounded queueContainer">
                <span className="frontIndicator">Front</span>
                {elements.map((elem, index) => (
                    <div key={`1-${index}`} className="elem"> {elem}</div>
                ))}
            </div>
            <div className="col" style={{gap:0}}>
                <span>Enqueue({randomAdd})</span>
                <MoveRight size={35}/>
            </div>
            <div className="row bordered rounded queueContainer">
                <span className="frontIndicator">Front</span>
                {(randomAdd.concat(elements)).map((elem, index) => (
                    <div key={`2-${index}`} className="elem"> {elem}</div>
                ))}
            </div>
            <div className="col" style={{gap:0}}>
                <span>Dequeue()</span>
                <MoveRight size={35}/>
            </div>
            <div className="row bordered rounded queueContainer">
                <span className="frontIndicator">Front</span>
                {(randomAdd.concat(elements.slice(0, elements.length-1))).map((elem, index) => (
                    <div key={`3-${index}`} className="elem"> {elem}</div>
                ))}
            </div>

        </div>
    )
}


export default QueueVisualization;