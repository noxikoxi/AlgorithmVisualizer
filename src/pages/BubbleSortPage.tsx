import "../styles/sort.css"
import {bubbleSortDescription, bubbleSortTodo, bubbleSort} from "../algorithms/sorting/descriptions";
import CodeBlock from "../components/CodeBlock";
import { useState } from "react";
import { generateRandomNumbers } from "../utils/numbers";
import BubbleSortVisualization from "../components/visualizations/BubbleSortVisualization";

const BubbleSortPage = () => {

    const [randomNumbers, setRandomNumbers] = useState<Number[]>(generateRandomNumbers(16, -20, 20));
    
    return (
        <div id="content">
            <div id="info">
                <div id="description">
                    <p className="title">
                        Bubble Sort
                    </p>
                    <span>
                        {bubbleSortDescription}
                    </span>
                    <div id="complexity">
                        <span>Time Complexity: O( n<span style={{verticalAlign: "super", fontSize: "smaller"}}>2 </span>)</span>
                        <span>Space Complexity: O(1)</span>
                    </div>
                    <div id="todo">
                        <span>How bubble sort works:</span>
                        <ol>
                            {bubbleSortTodo.map((item, index) => (
                                <li key={item.slice(10)}><pre>{item}</pre></li>
                            )) }
                        </ol>
                    </div>
                    <div id ="code">
                        <CodeBlock code = {bubbleSort.toString()} language="javascript"/>
                    </div>
                </div>
            </div>
            <div id="visualizationContainer">
                <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
                    <span style={{fontSize: "larger", fontWeight: '500', letterSpacing: "1px", margin: "15px 0px 15px 0px"}}>See if this code works!</span>
                </div>
                <div id="testCode">
                    <span>[ {randomNumbers.map((item, index) => <span key={index}>{item.toString()} </span>)} ]</span>
                    <div className="buttons">
                        <button onClick={() => setRandomNumbers(generateRandomNumbers(16, -20, 20))}>
                            Generate
                        </button>
                        <button onClick={() => setRandomNumbers(bubbleSort([...randomNumbers]))} className="next">
                            Sort
                        </button>
                        <button onClick={() => setRandomNumbers([])} className="danger">
                            Clear
                        </button>
                    </div>
                </div>
                <BubbleSortVisualization numbersNum={10}/>

            </div>
        </div>
    )
}

export default BubbleSortPage;