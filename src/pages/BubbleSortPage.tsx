import {bubbleSortDescription, bubbleSortTodo} from "../algorithms/sorting/descriptions";
import { bubbleSort } from "../algorithms/sorting/sort";
import BubbleSortVisualization from "../components/visualizations/BubbleSortVisualization";
import TestCode from "../components/TestCode";
import SortDescription from "../components/SortDescription";

const BubbleSortPage = () => {

    
    return (
        <div id="sortContent">
            <SortDescription 
                title={"Bubble Sort"} 
                description={bubbleSortDescription} 
                todo={bubbleSortTodo} 
                timeComplexity={<span>Time Complexity: O( n<span style={{verticalAlign: "super", fontSize: "smaller"}}>2 </span>)</span>} 
                spaceComplexity={<span>Space Complexity: O(1)</span>} 
                funcs={[bubbleSort.toString()]} 
            />
            <div id="visualizationContainer">
                <TestCode sort={bubbleSort}/>
                <BubbleSortVisualization/>
            </div>
        </div>
    )
}

export default BubbleSortPage;