import { insertionSortDescription, insertionSortText, insertionSortTodo } from "../algorithms/sorting/descriptions";
import { insertionSort } from "../algorithms/sorting/sort";
import SortDescription from "../components/SortDescription";
import TestCode from "../components/TestCode";
import InsertionSortVisualization from "../components/visualizations/InsertionSortVisualization";

const InsertionSortPage = () => {
    return (
        <div id="sortContent">
           <SortDescription 
                title={"Insertion Sort"} 
                description={insertionSortDescription} 
                todo={insertionSortTodo} 
                timeComplexity={<span>Time Complexity: O( n<span style={{verticalAlign: "super", fontSize: "smaller"}}>2 </span>)</span>} 
                spaceComplexity={<span>Space Complexity: O(1)</span>} 
                funcs={[insertionSortText]} 
            />
            <div id="visualizationContainer">
                <TestCode sort={insertionSort}/>
                <InsertionSortVisualization />
            </div>
        </div>
    )
}


export default InsertionSortPage;