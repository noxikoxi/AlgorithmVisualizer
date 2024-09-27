import {generateRandomNumbers} from "../../utils/numbers";

type Props = {
    numberOfElements: number
}
const ArrayVisualization = ({numberOfElements} : Props) => {

    const elements: number[] = generateRandomNumbers(numberOfElements, 10, 99);

    return (
        <div className="array" style={{display: "flex", gap: 5}}>
            {elements.map((elem, index) => (
                <div key={index} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <div  className="elem" >
                        <span>{elem}</span>
                    </div>
                    <span style={{fontSize: "large"}}>{index}</span>
                </div>
            ))}
        </div>
    )
}

export default ArrayVisualization;