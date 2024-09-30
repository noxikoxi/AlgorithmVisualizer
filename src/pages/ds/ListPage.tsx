import LinkedListVisualization from "../../components/visualizations/ds/LinkedListVisualization";
import {generateRandomNumbers} from "../../utils/numbers";
import TableTimeComplexity from "../../components/visualizations/ds/TableTimeComplexity";
import CodeBlock from "../../components/CodeBlock";
import {ListExample} from "../../algorithms/data-structures/examples";

const ListPage = () => {

    const elements =  generateRandomNumbers(8, 10, 99);

    return (
        <>
            <span className="text-block">List is fundamental data structures uses to store an ordered collections of elements. Unlike Array, it allows dynamic management of data, which means we don't need to know it's maximum size in initialization part. List's elements can be added, removes od deleted based on their position within the list. Lists are commonly used in programming and can hold elements of various data types. </span>
            <span className="text-block">This definition refers to <span className="bolded">Linked List</span>. A list can be also build from array <span className="bolded">(Array List)</span>, the difference between Array and Array List is that Array List can be resized when elements are added or deleted, so it doesn't have maximum size.</span>
            <span className="text-block">A <span className="bolded">Linked List</span> is build from Nodes, where each Node is a data structure that possess it's value and reference to next Node in the list. List is reference to first Node in a collection and it's end is when a Node.next is equal to <span className="bolded">NULL</span>.  A Node can also contains reference to previous element in a list. Therefore there exist a couple of list variants.</span>
            <div style={{display: "flex", gap: 10}}>
                <div className="col bordered rounded" style={{padding: 10, alignItems: "center"}}>
                    <span style={{fontSize: "large", fontWeight: 500}}>Node</span>
                    <div style={{paddingTop: 5, display: "flex", flexDirection: "column", borderTop: "1px solid var(--border)", width: "100%"}}>
                        <span>Value - [actual Node value]</span>
                        <span style={{color: "var(--next)"}}>Next - [next Node reference]</span>
                    </div>
                </div>
                <div className="col bordered rounded" style={{padding: 10, alignItems: "center"}}>
                    <span style={{fontSize: "large", fontWeight: 500}}>Node</span>
                    <div className="col" style={{paddingTop: 5, gap:0, borderTop: "1px solid var(--border)", width: "100%"}}>
                        <span>Value - [actual Node value]</span>
                        <span style={{color: "var(--next)"}}>Next - [next Node reference]</span>
                        <span style={{color: "var(--danger)"}}>Previous - [previous Node reference]</span>
                    </div>
                </div>
            </div>
            <div className="col" style={{alignItems: "center"}}>
                <span style={{marginTop: 10, fontSize: "large"}}>Types of linked list:</span>
                <ol>
                    <li>
                        <span>1. Singly Linked List</span>
                        <LinkedListVisualization elements={elements} single={true} circular={false}/>
                    </li>
                    <li>
                        <span>2. Doubly Linked List</span>
                        <LinkedListVisualization elements={elements} single={false} circular={false}/>
                    </li>
                    <li>
                        <span>3. Circular Linked List</span>
                        <LinkedListVisualization elements={elements} single={true} circular={true}/>
                    </li>
                    <li>
                        <span>4. Circular Double Linked List</span>
                        <LinkedListVisualization elements={elements} single={false} circular={true}/>
                    </li>
                </ol>
            </div>

            <span className="text-block">Singly Linked List is build from nodes with only pointer to the next Node. The list ends when a Node.next == NULL. When it's Circular Linked List, the last element has pointer to the first element. Double Linked List is build from Nodes that have in additional a pointer to previous Node. It allows traversing the list in both directions. Circular Double Linked List has the same pointer like in Single Circular List and an additional pointer to last element from the first one.</span>
            <span className="text-block">Circular Lists don't have defined "end" because there is no NULL pointer.</span>
            <span className="text-block">Typical Operations possible on Linked Lists are: insertion, deletion, searching, traversal, updating, accessing elements </span>
            <TableTimeComplexity title="Time Complexity of Operations on Linked List"/>

            <h2>Explanation</h2>

            <span className="text-block"><strong>Access elements:</strong> Accessing an element in any type of linked list requires traversing the list, so the time complexity is O(n) for all types.</span>
            <span className="text-block"><strong>Insert at Beginning:</strong> Inserting at the beginning is a constant-time operation (O(1)) for all types of lists, as it only involves updating the head pointer.</span>
            <span className="text-block"><strong>Insert at End:</strong>
                <ul style ={{listStyleType: "circle", marginLeft: 20, marginTop: 0}}>
                    <li>For singly and doubly linked lists without a pointer to the last element, inserting at the end requires traversing the entire list (O(n)).</li>
                    <li>For circular linked lists and circular doubly linked lists with a pointer to the end, inserting at the end can be done in O(1).</li>
                </ul>
            </span>

            <span className="text-block"><strong>Insert at Position:</strong> Inserting at a specific position requires traversing the list to reach the desired position, which takes O(n) time for all types of lists.</span>

            <span className="text-block"><strong>Delete at Beginning:</strong> Deleting at the beginning is an O(1) operation for all types of lists, as it only involves updating the head pointer.</span>

            <span className="text-block"><strong>Delete at End:</strong>
                 <ul style ={{listStyleType: "circle", marginLeft: 20, marginTop: 0}}>
                    <li>For singly and doubly linked lists without a pointer to the last element, deleting at the end requires traversing the entire list (O(n)).</li>
                    <li>For circular linked lists and circular doubly linked lists, deleting at the end can be done in O(1) if a pointer to the last element is maintained.</li>
                </ul>
            </span>

            <span className="text-block"><strong>Delete at Position:</strong> Deleting at a specific position requires traversing the list to reach the desired position, which takes O(n) time for all types of lists.</span>
            <span className="text-block"><strong>Searching:</strong> Searching for an element requires traversing the list, so the time complexity is O(n) for all types of linked lists.</span>
            <p>Circular Doubly Linked List in C++</p>
            <CodeBlock code={ListExample} language="cpp"/>

            <span className="text-block"> Different Linked List variants would slightly differ. Without circular property, traversal would be done until Node.next == nullptr. Without pointer to previous Node to insert at the end, firstly traversal to end is needed in O(n).</span>
        </>
    )
}

export default ListPage;