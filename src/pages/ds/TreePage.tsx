import TimeComplexityList from "../../components/TimeComplexityList";
import TreeVisualization from "../../components/visualizations/ds/TreeVisualization";

const TreePage = () => {
    return(
        <>
            <span className="text-block">
                Trees are one of the most used data structures in Computer Science. To understand what they are you need to first understand what graphs are. A Tree is a graph that fulfills following requirements:
                <ul>
                    <li> There only exist one path between every pair of vertices. </li>
                    <li> Graph is acyclic, which means none path has the same starting and ending point. </li>
                    <li> Graph is connected, which means we can find at least one path between each pair of vertices. </li>
                </ul>
                Traditionally trees are drawn in such a way that root is at the top, and descendants are at the lower levels. Children of the same parent are always on the same level.
            </span>
            <span className="text-block">
                Basic definitons associated with trees:
                <ul>
                    <li> Root- it is the top node which does not have a parent. It is the only vertice in the tree that does not have a parent. </li>
                    <li> Parent- it is the node that has one or more children. Parent is connected to it's child nodes with edges. </li>
                    <li> Child- it is the node that has a parent. Path to root always leads through parent. </li>
                    <li> Leaf- it is the node that does not have a children. </li>
                    <li> Level (Depth)- it is a number of edges in the path from a given node to the root. Root has level 0, it's children 1 etc. </li>
                    <li> Leaf- it is the node that does not have a children. </li> 
                </ul>
            </span>

            <p>Tree Visualization</p>
            <TreeVisualization/>

            <span className="text-block">Trees are also classified according to their structure and properties. Most commonly used types in Computer Science are: </span>
            <span className="text-block">
                <ul>
                    <li><span className="bolded">Binary Tree</span> - it is the tree in which each parent can have only up to 2 children. Variants of this type of tree are commonly used in sorting algorithms. Those variants are: 
                        <ul>
                            <li><span className="italic">Binary Search Tree</span> - it is a variant of binary tree, in which the key stored in given node, must be greater than all of the keys stored in left subtree, and less than all of the keys stored in right subtree. It is used in Tree Sort.</li>
                            <li><span className="italic">Heap</span>- it is also used in sorting. Values stored in nodes must satisfy the heap property, which means that parent must have value greater or equal to the values stored in it's children. It is used in Heap Sort.</li>
                        </ul>
                    </li>
                    <li><span className="bolded">B-tree</span> - this data structure is used mostly in database systems. Indexes that are created for given columns in tables use b-trees. B-trees can store more than one value in given node. All leaves are on the same level, and when new data is inserted or removed from tree, it self balances itself to maintain those properties. </li>
                </ul>
            </span>
            
            <span className="text-block">
                Typical operation that you can do on a tree are:
                <ul>
                    <li><span className="bolded">Insert</span></li>
                    <li><span className="bolded">Delete</span></li>
                    <li><span className="bolded">Search</span></li>
                </ul>
            </span>
            <span className="text-block">B-tree time complexity of commonly used operations. </span>

            <TimeComplexityList complexity={['O(log n)', 'O(log n)', 'O(log n)']} operations={['Search', 'Insert', 'Delete']}/>

        </>
    )
}

export default TreePage;