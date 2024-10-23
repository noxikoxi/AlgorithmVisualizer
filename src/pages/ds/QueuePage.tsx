import QueueVisualization from "../../components/visualizations/ds/QueueVisualization";
import TimeComplexityList from "../../components/TimeComplexityList";
import CodeBlock from "../../components/CodeBlock";
import {queueArrayExample, queueLinkedListExample} from "../../algorithms/data-structures/examples";

const QueuePage = () => {
    return (
        <>
            <span className="text-block">Queues are linear data structures defined by a sequence of elements that follows <span className="bolded">FIFO (First In, First Out)</span> principle. It means that the first element added is the first element to be removed. The simplest imagination of this data structure is a line of people waiting for a service, if somebody came after you, they will be served later.</span>
            <span className="text-block">Queue implementation, just like a stack, can be done using array or linked list (with a reference to it's end).</span>
            <span className="text-block">
                Typical operation that you can do on a queue are:
                <ul>
                    <li><span className="bolded">Enqueue</span> - Adds new element to the back of the queue.</li>
                    <li><span className="bolded">Dequeue</span> - Removes and return the first element from the queue.</li>
                    <li><span className="bolded">Peek</span> - Return the value at the front of the queue without removing it.</li>
                    <li><span className="bolded">isEmpty</span> - Checks if the queue is empty.</li>
                </ul>
            </span>

            <span className="text-block">They is more that one type of a Queue. In addition we have <span className="bolded">Deque</span> and <span className="bolded">Priority Queue</span>.</span>
            <span className="text-block">Deque (Double-ended Queue) allows for elements to be added or removed both from front and the rear, making it possible to have queue and stack functionalities in one data structure. Deque can be implemented with array or double linked list</span>
            <span className="text-block">Priority Queue works similar to standard Queue, however each element must have a key (priority) and they are dequeued based on these keys. Order of elements enqueued doesn't matter, only they key value is considered when choosing which element to return. Elements with higher priority are dequeued before element with lower priority. If priority is the same for two elements FIFO principal is applied. A typical way to implement a Priority Queue is to use a <span className="bolded">Binary Heap</span>. Element with the highest priority will always be on top and after each dequeue heap property must be satisfied, so heapify() is called.</span>

            <p>Queue Visualization</p>
            <QueueVisualization/>

            <TimeComplexityList complexity={['O(1)', 'O(1)', 'O(1)', 'O(1)']} operations={['Enqueue', 'Dequeue', 'Peek', "isEmpty"]}/>
            <span className="text-block">Worth noticing is that O(1) time complexity for dequeue is when queue is implemented using linked list. In array implementation it's O(n), because shift of each element is needed. However is queue implementation on array use circular incrementation, then shift is not needed and queueing is still O(1).</span>

            <p>Queue implementation using array and circular incrementation.</p>
            <CodeBlock code={queueArrayExample} language="cpp"/>

            <p>Queue implementation using singly linked list.</p>
            <CodeBlock code={queueLinkedListExample} language="cpp"/>

        </>
    )
}

export default QueuePage;