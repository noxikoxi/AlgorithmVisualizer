export const DS = ["Array", "List", "Stack", "Queue", "Heap", "Graph", "Tree"];

export const linkedListComplexity = [
    {
        operation: 'Access elements',
        linkedList: 'O(n)',
        doublyLinkedList: 'O(n)',
        circularLinkedList: 'O(n)',
        circularDoublyLinkedList: 'O(n)',
    },
    {
        operation: 'Insert at Beginning',
        linkedList: 'O(1)',
        doublyLinkedList: 'O(1)',
        circularLinkedList: 'O(1)',
        circularDoublyLinkedList: 'O(1)',
    },
    {
        operation: 'Insert at End',
        linkedList: 'O(n)',
        doublyLinkedList: 'O(n)',
        circularLinkedList: 'O(1)',
        circularDoublyLinkedList: 'O(1)',
    },
    {
        operation: 'Insert at Position',
        linkedList: 'O(n)',
        doublyLinkedList: 'O(n)',
        circularLinkedList: 'O(n)',
        circularDoublyLinkedList: 'O(n)',
    },
    {
        operation: 'Delete at Beginning',
        linkedList: 'O(1)',
        doublyLinkedList: 'O(1)',
        circularLinkedList: 'O(1)',
        circularDoublyLinkedList: 'O(1)',
    },
    {
        operation: 'Delete at End',
        linkedList: 'O(n)',
        doublyLinkedList: 'O(n)',
        circularLinkedList: 'O(1)',
        circularDoublyLinkedList: 'O(1)',
    },
    {
        operation: 'Delete at Position',
        linkedList: 'O(n)',
        doublyLinkedList: 'O(n)',
        circularLinkedList: 'O(n)',
        circularDoublyLinkedList: 'O(n)',
    },
    {
        operation: 'Searching',
        linkedList: 'O(n)',
        doublyLinkedList: 'O(n)',
        circularLinkedList: 'O(n)',
        circularDoublyLinkedList: 'O(n)',
    },
]

export const GraphComplexity = [
    {
        operation: 'Add Vertex',
        adjacencyMatrix: 'O(V^2)',
        adjacencyList: 'O(1)',
    },
    {
        operation: 'Remove Vertex',
        adjacencyMatrix: 'O(V^2)',
        adjacencyList: 'O(V+E)',
    },
    {
        operation: 'Add Edge',
        adjacencyMatrix: 'O(1)',
        adjacencyList: 'O(1)',
    },
    {
        operation: 'Remove Edge',
        adjacencyMatrix: 'O(1)',
        adjacencyList: 'O(degree of vertex)',
    },
    {
        operation: 'Check for Edge',
        adjacencyMatrix: 'O(1)',
        adjacencyList: 'O(degree of vertex)',
    },
    {
        operation: 'Degree of Vertex',
        adjacencyMatrix: 'O(V)',
        adjacencyList: 'O(degree of vertex)',
    },
    {
        operation: 'DFS/BFS',
        adjacencyMatrix: 'O(V^2)',
        adjacencyList: 'O(V + E)',
    },
]

export const graphVisualizationNodes = [
    { x: 50, y: 50, label: "A" },
    { x: 200, y: 50, label: "B" },
    { x: 50, y: 200, label: "C" },
    { x: 200, y: 200, label: "D" },
    { x: 150, y: 400, label: "E" },
    { x: 500, y: 400, label: "F" },
    { x: 400, y: 100, label: "G" },
    { x: 300, y: 300, label: "H" },
    { x: 520, y: 250, label: "I" },
    { x: 520, y: 100, label: "J" },
];

export const graphVisualizationEdges = [
    { from: 0, to: 1 },
    { from: 0, to: 2 },
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 2, to: 4 },
    { from: 3, to: 4 },
    { from: 1, to: 6 },
    { from: 6, to: 5 },
    { from: 4, to: 5 },
    { from: 8, to: 9 }
];

export const graphVisualizationEdgesList = [[1, 2], [0, 2, 6], [0, 1, 3, 4], [2], [2, 3, 5], [4, 6], [1, 5,], [], [9], [8]];