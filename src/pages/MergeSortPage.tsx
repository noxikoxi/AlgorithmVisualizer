import { inPlaceMergeSortAdditional, inPlaceMergeSortDescription, mergeSortDescription, mergeSortTodo } from "../algorithms/sorting/descriptions";
import { inPlaceMerge, inPlaceMergeSort, merge, mergeSort } from "../algorithms/sorting/sort";
import CodeBlock from "../components/CodeBlock";
import SortDescription from "../components/SortDescription";
import TestCode from "../components/TestCode";
import InPlaceMergeSortVisualization from "../components/visualizations/InPlaceMergeSortVisualization";
import MergeSortVisualization from "../components/visualizations/MergeSortVisualization";

const MergeSortPage = () => {
    return (
        <div id="sortContent">
           <SortDescription 
                title={"Merge Sort"} 
                description={mergeSortDescription} 
                todo={mergeSortTodo} 
                timeComplexity={<span>Time Complexity: O( n * log<span style={{verticalAlign: "sub", fontSize: "smaller"}}>2</span>(n) )</span>} 
                spaceComplexity={<span>Space Complexity: O(n)</span>} 
                funcs={[mergeSort.toString(), merge.toString()]} 
            >
                <p className="title">
                    In-Place Merge Sort
                </p>
                <span>{inPlaceMergeSortDescription}</span>
                <div dangerouslySetInnerHTML={{__html : inPlaceMergeSortAdditional}}/>
                <div className="code">
                {[inPlaceMergeSort.toString(), inPlaceMerge.toString()].map((text, index) => (
                    <CodeBlock key={index} code = {text} language="javascript"/>
                ))}
                </div>
                
            </SortDescription>
            <div id="visualizationContainer">
                <TestCode sort={mergeSort} text="See if merge sort works!"/>
                <MergeSortVisualization/>
                <TestCode inPlaceSort={inPlaceMergeSort} text="See if in-place merge sort works!"/>
                <InPlaceMergeSortVisualization />
            </div>
        </div>
    )
}

export default MergeSortPage;