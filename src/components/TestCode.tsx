import { useState } from "react";
import { TestCodeNumbersMax, TestCodeNumbersMin, TestCodeNumbersNum } from "../algorithms/sorting/config";
import { generateRandomNumbers } from "../utils/numbers";

type Props = {
    sort: (arr: number[]) => number[],
}

const TestCode = ({ sort} : Props) => {

    const [randomNumbers, setRandomNumbers] = useState<number[]>(generateRandomNumbers(TestCodeNumbersNum, TestCodeNumbersMin, TestCodeNumbersMax));
    
    return (
        <>
        <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
            <span style={{fontSize: "larger", fontWeight: '500', letterSpacing: "1px", margin: "15px 0px 15px 0px"}}>See if this code works!</span>
        </div>
        <div id="testCode">
            <span>[ {randomNumbers.map((item, index) => <span key={index}>{item.toString()} </span>)} ]</span>
            <div className="buttons">
                <button onClick={() => setRandomNumbers(generateRandomNumbers(TestCodeNumbersNum, TestCodeNumbersMin, TestCodeNumbersMax))}>
                    Generate
                </button>
                <button onClick={() => setRandomNumbers(sort([...randomNumbers]))} className="next">
                    Sort
                </button>
                <button onClick={() => setRandomNumbers([])} className="danger">
                    Clear
                </button>
            </div>
        </div>
    </>
    )
}

export default TestCode;