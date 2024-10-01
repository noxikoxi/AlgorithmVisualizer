import StackVisualization from "../../components/visualizations/ds/StackVisualization";
import {stackArrayExample, stackLinkedListExample} from "../../algorithms/data-structures/examples";
import CodeBlock from "../../components/CodeBlock";

const StackPage = () => {
    return (
        <>
            <span className="text-block">A stack is a linear data structure that follows <span className="bolded">LIFO (Last In, First Out)</span> principle. This means that the last element added to a stack is the first one to be removed. You may think about stack like a stack of objects (plates, books, etc.), if you want to take everything one by one you will always take the top item.</span>
            <span className="text-block">The simplest implementation of a stack would be to use array or linked list (with a reference to it's end).</span>
            <span className="text-block">
                Typical operation that you can do on a stack are:
                <ul style={{listStyleType: "circle", paddingLeft: 40, margin: 0}}>
                    <li>Push - Adds new element to the top of stack.</li>
                    <li>Pop - Removes element from the top of stack.</li>
                    <li>Peek - Return the value from the top of stack without removing it.</li>
                    <li>isEmpty - Checks if the stack is empty.</li>
                </ul>
            </span>

            <StackVisualization/>

            <span className="bolded">Time Complexity</span>
            <ul style={{listStyleType: "circle", paddingLeft: 40, margin: 0, fontSize: "large", width: 200}}>
                <li><span className="justify-between"><span>Push</span><span>O(1)</span></span></li>
                <li><span className="justify-between"><span>Pop</span><span>O(1)</span></span></li>
                <li><span className="justify-between"><span>Peek</span><span>O(1)</span></span></li>
                <li><span className="justify-between"><span>isEmpty</span><span>O(1)</span></span></li>
            </ul>

            <span className="text-block">This is because these operations involve accessing or modifying the top element of the stack, which is usually implemented using an array or a linked list. In both cases, accessing the top element is a constant-time operation.</span>
            <p>Stack implementation using array.</p>
            <CodeBlock code={stackArrayExample} language="cpp"/>
            <p>Stack implementation using singly linked list.</p>
            <CodeBlock code={stackLinkedListExample} language="cpp"/>
        </>
    )
}

export default StackPage;