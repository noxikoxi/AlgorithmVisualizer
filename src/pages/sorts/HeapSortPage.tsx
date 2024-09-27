import SortDescription from "../../components/SortDescription";
import {
    buildHeapText, heapifyText, heapSortAdditional,
    heapSortDescription, heapSortText, heapSortTodo,
} from "../../algorithms/sorting/descriptions";
import TestCode from "../../components/TestCode";
import {heapSort} from "../../algorithms/sorting/sort";
import HeapSortBarVisualization from "../../components/visualizations/HeapSortBarVisualization";

const HeapSortPage = () => {
    return (
        <div id="sortContent">
            <SortDescription
                title={"Heap Sort"}
                description={heapSortDescription}
                todo={heapSortTodo}
                timeComplexity={<span>Time Complexity: O( n * log<span style={{verticalAlign: "sub", fontSize: "smaller"}}>2</span>(n) )</span>}
                spaceComplexity={<span>Time Complexity: O( log<span style={{verticalAlign: "sub", fontSize: "smaller"}}>2</span>(n) )</span>}
                funcs={[heapSortText, buildHeapText, heapifyText]}
                additional={heapSortAdditional}
            >
            </SortDescription>
            <div id="visualizationContainer">
                <TestCode inPlaceSort={heapSort} text="See if heap sort works!"/>
                <HeapSortBarVisualization/>
            </div>
        </div>
    )
}

export default HeapSortPage;