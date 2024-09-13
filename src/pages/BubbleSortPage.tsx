import "../styles/sort.css"
import {bubbleSortDescription, bubbleSortTodo, bubbleSort} from "../algorithms/sorting/descriptions";
import CodeBlock from "../components/CodeBlock";

const BubbleSortPage = () => {
    
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
                                <li key={index}><pre>{item}</pre></li>
                            )) }
                        </ol>
                    </div>
                    <div id ="code">
                        <CodeBlock code = {bubbleSort.toString()} language="javascript"/>
                    </div>
                </div>
            </div>
            <div id="visualization">

            </div>
            
        </div>
    )
}

export default BubbleSortPage;