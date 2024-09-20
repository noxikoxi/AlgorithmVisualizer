import { selectionSortDescription, selectionSortText, selectionSortTodo } from "../algorithms/sorting/descriptions";
import { selectionSort } from "../algorithms/sorting/sort";
import SelectionSortVisualization from "../components/visualizations/SelectionSortVisualization";
import TestCode from "../components/TestCode";
import SortDescription from "../components/SortDescription";

const SelectionSortPage = () => {
    return (
        <div id="sortContent">
           <SortDescription 
                title={"Selection Sort"} 
                description={selectionSortDescription} 
                todo={selectionSortTodo} 
                timeComplexity={<span>Time Complexity: O( n<span style={{verticalAlign: "super", fontSize: "smaller"}}>2 </span>)</span>} 
                spaceComplexity={<span>Space Complexity: O(1)</span>} 
                funcs={[selectionSortText]} 
            />
            <div id="visualizationContainer">
                <TestCode sort={selectionSort}/>
                <SelectionSortVisualization />
            </div>
        </div>
    )
}

export default SelectionSortPage;