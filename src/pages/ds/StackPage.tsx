import StackVisualization from "../../components/visualizations/ds/StackVisualization";
import {stackArrayExample, stackLinkedListExample} from "../../algorithms/data-structures/examples";
import CodeBlock from "../../components/CodeBlock";
import TimeComplexityList from "../../components/TimeComplexityList";

const StackPage = () => {
    return (
        <>
            <span className="text-block">A stack is a linear data structure that follows <span className="bolded">LIFO (Last In, First Out)</span> principle. This means that the last element added to a stack is the first one to be removed. You may think about stack like a stack of objects (plates, books, etc.), if you want to take everything one by one you will always take the top item.</span>
            <span className="text-block">The simplest implementation of a stack would be to use array or linked list.</span>
            <span className="text-block">
                Typical operation that you can do on a stack are:
                <ul style={{listStyleType: "circle", paddingLeft: 40, margin: 0}}>
                    <li><span className="bolded">Push</span> - Adds new element to the top of stack.</li>
                    <li><span className="bolded">Pop</span> - Removes and return element from the top of stack.</li>
                    <li><span className="bolded">Peek</span> - Return the value from the top of stack without removing it.</li>
                    <li><span className="bolded">isEmpty</span> - Checks if the stack is empty.</li>
                </ul>
            </span>
            <p>Stack Visualization</p>
            <StackVisualization/>

            <TimeComplexityList complexity={['O(1)', 'O(1)', 'O(1)', 'O(1)']} operations={['Push', 'Pop', 'Peek', "isEmpty"]}/>

            <span className="text-block">This is because these operations involve accessing or modifying the top element of the stack, which is usually implemented using an array or a linked list. In both cases, accessing the top element is a constant-time operation.</span>
            <p>Stack implementation using array.</p>
            <CodeBlock code={stackArrayExample} language="cpp"/>
            <p>Stack implementation using singly linked list.</p>
            <CodeBlock code={stackLinkedListExample} language="cpp"/>
        </>
    )
}

export default StackPage;