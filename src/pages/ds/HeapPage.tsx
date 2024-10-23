import HeapTreeVisualization from "../../components/visualizations/ds/HeapTreeVisualization";
import {generateRandomNumbers} from "../../utils/numbers";
import {useEffect, useState} from "react";
import {buildHeap} from "../../algorithms/sorting/sort";
import ArrayVisualization from "../../components/visualizations/ds/ArrayVisualization";
import BuildingHeapAnimation from "../../components/visualizations/ds/BuildingHeapAnimation";
import CodeBlock from "../../components/CodeBlock";
import {heapExample, ListExample} from "../../algorithms/data-structures/examples";
import TimeComplexityList from "../../components/TimeComplexityList";

const HeapPage = () => {

    const [numbers, setNumbers] = useState<number[]>(generateRandomNumbers(15, 1, 99));

    useEffect(() => {
        buildHeap(numbers);
        setNumbers([...numbers]);
    }, []);

    return (
        <>
            <span className="text-block">A Heap is a specialized tree-based data structure that satisfy <span className="bolded">Heap Property</span>. Heap Property means that each elements cannot have children that are greater/lower (depends if it's Max-Heap or Min-Heap) than it's value. A heap is always a complete binary tree, meaning all levels are fully filled except possibly the last one (leaves), which is filled from left to right</span>
            <span className="text-block">There exist two variants of a heap: <span className="bolded">Max-Heap</span> and <span className="bolded">Min-Heap</span>.</span>
            <span className="text-block">
                <ul>
                    <li><span className="bolded">Max-Heap</span> - value of each node is greater than or equal to values of its children. So, the largest element is always root.</li>
                    <li><span className="bolded">Min-Heap</span> - value of each node is less than or equal to values of its children. Root is always the lowest element.</li>
                </ul>
            </span>
            <span className="text-block">
                Heap is usually implemented using Array or Binary Tree, with often the most efficient one being array implementation, where parent-child relationship are managed through index calculations.
                <ul>
                    <li><span className="bolded">Root</span> - Always index = 0.</li>
                    <li><span className="bolded">Parent</span> - For the node at index <span className="bolded">i</span>: (i-1) / 2.</li>
                    <li><span className="bolded">Left Child</span> - For the node at index <span className="bolded">i</span>: 2*i + 1.</li>
                    <li><span className="bolded">Right Child</span> - For the node at index <span className="bolded">i</span>: 2+i + 2.</li>
                </ul>
            </span>

            <span className="text-block">
                Typical operation that you can do on a heap are:
                <ul>
                    <li><span className="bolded">Insert</span> - Adds new element to the heap while maintaining the heap property.</li>
                    <li><span className="bolded">Extract</span> - Removes the root element followed by restoring heap structure.</li>
                    <li><span className="bolded">Peek</span> - Accessing the root element without removing it.</li>
                </ul>
            </span>

            <span className="text-block">Heaps are used in Priority Queues, Heap Sort and Graph Algorithms like Dijkstra's or Prim's.</span>

            <TimeComplexityList complexity={['O( log(n) )', 'O( log(n) )', 'O(1)', 'O( n )']} operations={['Insert', 'Extract', 'Peek', 'BuildHeap']}/>

            <span className="text-block">Building a heap from existing array can be achieved in O(n) with bottom-up heapify-down process in which you start at index (n/2)-1 and then call heapify for each non-leaf node working from right to left (in array). Total time complexity id derived from fact that nodes near the bottom take less time to heapify when nodes closer to the top need more. However there is less nodes close to the top than bottom of a heap.</span>

            <p>Heap with tree representation visualization</p>
            <HeapTreeVisualization heap={numbers}/>

            <p>The same heap, but as an array</p>
            <ArrayVisualization elements={numbers} shorten={true}/>

            <p>Building Heap Animation</p>
            <BuildingHeapAnimation />

            <p>heap in C++</p>
            <CodeBlock code={heapExample} language="cpp"/>
        </>
    )
}

export default HeapPage;