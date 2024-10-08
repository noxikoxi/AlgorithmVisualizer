import { useState } from "react";
import { TestCodeNumbersMax, TestCodeNumbersMin, TestCodeNumbersNum } from "../algorithms/sorting/config";
import { generateRandomNumbers } from "../utils/numbers";

type Props = {
    sort?: (arr: number[]) => number[],
    inPlaceSort?: (arr: number[]) => void,
    text? : string
}

const TestCode = ({ sort, text, inPlaceSort} : Props) => {

    const [randomNumbers, setRandomNumbers] = useState<number[]>(generateRandomNumbers(TestCodeNumbersNum, TestCodeNumbersMin, TestCodeNumbersMax));
    
    return (
        <>
        <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
            <span style={{fontSize: "larger", fontWeight: '500', letterSpacing: "1px", margin: "15px 0px 15px 0px"}}>{text ? text : "See if this code works!"}</span>
        </div>
        <div id="testCode">
            <span style={{marginLeft: "10px", marginRight: "10px"}}>{randomNumbers.map((item, index) => <span key={index}>{item.toString()} </span>)}</span>
            <div className="buttons">
                <button onClick={() => setRandomNumbers(generateRandomNumbers(TestCodeNumbersNum, TestCodeNumbersMin, TestCodeNumbersMax))}>
                    Generate
                </button>
                <button onClick={() => {
                    if(sort){
                        setRandomNumbers(sort([...randomNumbers]));
                    }else if (inPlaceSort){
                        inPlaceSort(randomNumbers);
                        setRandomNumbers([...randomNumbers]);
                    }   
                }} className="next">
                    Sort
                </button>
                {/*<button onClick={() => setRandomNumbers([])} className="danger">*/}
                {/*    Clear*/}
                {/*</button>*/}
            </div>
        </div>
    </>
    )
}

export default TestCode;