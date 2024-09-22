import { partitionText, quickSortAdditional, quickSortDescription, quickSortText, quickSortTodo } from "../algorithms/sorting/descriptions";
import { quickSort } from "../algorithms/sorting/sort";
import SortDescription from "../components/SortDescription";
import TestCode from "../components/TestCode";
import QuickSortBarVisualization from "../components/visualizations/QuickSortBarVisualization";
import QuickSortVisualization from "../components/visualizations/QuickSortVisualization";

const QuickSortPage = () => {
    return (
        <div id="sortContent">
           <SortDescription 
                title={"Quick Sort"} 
                description={quickSortDescription} 
                todo={quickSortTodo} 
                timeComplexity={<span>Time Complexity: O( n * log<span style={{verticalAlign: "sub", fontSize: "smaller"}}>2</span>(n) )</span>} 
                spaceComplexity={<span>Space Complexity: O( log<span style={{verticalAlign: "sub", fontSize: "smaller"}}>2</span>(n) )</span>} 
                funcs={[quickSortText, partitionText]}
                additional={quickSortAdditional}
            >   
            </SortDescription>
            <div id="visualizationContainer">
                <TestCode inPlaceSort={quickSort} text="See if quick sort works!"/>
                <QuickSortBarVisualization/>
                <QuickSortVisualization />
            </div>
        </div>
    )
}

export default QuickSortPage;