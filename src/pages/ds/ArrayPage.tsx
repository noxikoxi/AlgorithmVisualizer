import ArrayVisualization from "../../components/visualizations/ds/ArrayVisualization";
import CodeBlock from "../../components/CodeBlock";
import {arrayExample} from "../../algorithms/data-structures/examples";
import {generateRandomNumbers} from "../../utils/numbers";
import TimeComplexityList from "../../components/TimeComplexityList";

const ArrayPage = () => {
    const elements: number[] = generateRandomNumbers(10, 10, 99);

    return (
            <>
                <span className="text-block">An array (or a table) is the simplest possible data structure. It is used to store a specific group of elements. You can imagine it as a collection of elements (they are stored at contiguous memory location). Each element has a specific index, from which a reference to it can be obtained. Because an array is contiguous memory location its size should be known in initialization. We cannot exceed or shrink an array, the only possibility is to create new array and copy existing elements to it. Arrays can stored element of any type. </span>
                <p>Array Visualization</p>
                <ArrayVisualization elements={elements}/>
                <span className="text-block"> This border can be imagined as an array. It stores element, each one has a value (inside the block) and an index (below the block). Indexing almost always starts from number 0, however in some programing language (for example Fortran), default indexing starts from 1. Therefore if we call this array "arr" referencing arr[0] would give as the first element. Referencing arr without brackets is reference to its first element, so arr[0] = arr.</span>
                <TimeComplexityList complexity={['O(1)', 'O(n)', 'O(n)', 'O(n)']} operations = {["Access", "Search", "Insertion", "Deletion"]}/>
                <span className="text-block">Time Complexity for insertion is O(n), because when we want to insert an element at a specific index, the rest of elements need to be shifted to right resulting in the worst case scenario shifting every element. Without shifting elements it's O(1). The same goes for deleting elements.</span>
                <p>Code Example</p>
                <CodeBlock code={arrayExample} language="cpp"/>
                <span className="text-block">Remember that indexing elements lower that 0 and greater that declared array size is possible. You will changed what is saved in next/previous memory block. Be aware that your index must be greater or equal 0 and never bigger than array's maximum size. </span>
            </>
    )
}

export default ArrayPage;