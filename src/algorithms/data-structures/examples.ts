export const arrayExample: string = `#include <iostream>
using namespace std;

int main() {
    // Declaration and initialization array with 5 elements
    int arr[5] = {10, 20, 30, 40, 50};
    // Array length
    int len = 5;
    
    // Printing array elements
    cout << "Array elements: ";
    for (int i = 0; i < len; i++) {
        // Indexes are used to get elements
        cout << arr[i] << " ";
    }
    // **************
    // Output
    // 10 20 30 40 50
    // **************
    // Finding the sum of elements
    int sum = 0;
    for (int i = 0; i < len; i++) {
        sum += arr[i];
    }
    cout << "Sum: " << sum << "\\n";
    // **************
    // Output
    // Sum: 150
    // **************
    // Changing element at index 1
    arr[1] = 25;
    // arr = [10, 25, 30, 40, 50]
    // Deleting element at index 2 with shift
    for (int i = 2; i < len; i++) {
        arr[i] = arr[i+1];
    }
    --len;
    // arr = [10, 25, 40, 50, *free space with value=50*]
    // Inserting element at index 1
    ++len;
    for (int i = len; i > 1; i--) {
        arr[i] = arr[i-1];
    }
    arr[1] = 5;
    // arr = [10, 5, 25, 40, 50]
    
    return 0;
}`;

export const ListExample = `#include <iostream>
using namespace std;

// Node structure for Circular Doubly Linked List
struct Node {
    int data;
    Node* next;
    Node* prev;
};

// Circular Doubly Linked List class
class CircularDoublyLinkedList {
private:
    Node* head;
    
public:
    // Constructor
    CircularDoublyLinkedList() : head(nullptr) {}

    // Function to insert a node at the beginning
    void insertAtBeginning(int value) {
        Node* newNode = new Node();
        newNode->data = value;
        if (head == nullptr) {
            // If list is empty
            head = newNode;
            newNode->next = newNode;
            newNode->prev = newNode;
        } else {
            Node* tail = head->prev;  // Get the last node
            newNode->next = head;
            newNode->prev = tail;
            head->prev = newNode;
            tail->next = newNode;
            head = newNode;  // Update head to the new node
        }
    }

    // Function to insert a node at the end
    void insertAtEnd(int value) {
        Node* newNode = new Node();
        newNode->data = value;
        if (head == nullptr) {
            // If list is empty, create the first node
            head = newNode;
            newNode->next = newNode;
            newNode->prev = newNode;
        } else {
            Node* tail = head->prev;  // Get the last node
            newNode->next = head;
            newNode->prev = tail;
            tail->next = newNode;
            head->prev = newNode;
        }
    }

    // Function to insert a node at a specific position (1-based index)
    void insertAtPosition(int value, int pos) {
        if (pos <= 1) {
            insertAtBeginning(value);
            return;
        }

        Node* newNode = new Node();
        newNode->data = value;

        Node* temp = head;
        for (int i = 1; i < pos - 1 && temp->next != head; i++) {
            temp = temp->next;
        }

        Node* nextNode = temp->next;
        newNode->next = nextNode;
        newNode->prev = temp;
        temp->next = newNode;
        nextNode->prev = newNode;
    }

    // Function to delete a node from the beginning
    void deleteAtBeginning() {
        if (head == nullptr) {
            cout << "List is empty" << "\\n";
            return;
        }
        if (head->next == head) {
            // Only one node in the list
            delete head;
            head = nullptr;
        } else {
            Node* tail = head->prev;
            Node* temp = head;
            head = head->next;
            tail->next = head;
            head->prev = tail;
            delete temp;
        }
    }

    // Function to delete a node from the end
    void deleteAtEnd() {
        if (head == nullptr) {
            cout << "List is empty" << "\\n";
            return;
        }
        if (head->next == head) {
            // Only one node in the list
            delete head;
            head = nullptr;
        } else {
            Node* tail = head->prev;
            Node* newTail = tail->prev;
            newTail->next = head;
            head->prev = newTail;
            delete tail;
        }
    }

    // Function to delete a node at a specific position (1-based index)
    void deleteAtPosition(int pos) {
        if (head == nullptr) {
            cout << "List is empty" << "\\n";
            return;
        }
        if (pos <= 1) {
            deleteAtBeginning();
            return;
        }

        Node* temp = head;
        for (int i = 1; i < pos && temp->next != head; i++) {
            temp = temp->next;
        }

        Node* prevNode = temp->prev;
        Node* nextNode = temp->next;

        prevNode->next = nextNode;
        nextNode->prev = prevNode;

        delete temp;
    }

    void display() {
        if (head == nullptr) {
            cout << "List is empty" << "\\n";
            return;
        }
        Node* temp = head;
        do {
            cout << temp->data << " ";
            temp = temp->next;
        } while (temp != head);
        cout << endl;
    }

    // Destructor to clean up memory
    ~CircularDoublyLinkedList() {
        while (head != nullptr) {
            deleteAtBeginning();
        }
    }
};

// Main function to demonstrate Circular Doubly Linked List
int main() {
    CircularDoublyLinkedList list;

    // Inserting elements at the beginning and end
    list.insertAtBeginning(10);
    list.insertAtBeginning(20);
    list.insertAtEnd(30);
    list.insertAtEnd(40);

    // Insert at a specific position
    list.insertAtPosition(25, 3);

    cout << "List after insertion: ";
    list.display();
    // List after insertion: 20 10 25 30 40 

    // Deleting elements
    list.deleteAtBeginning();
    cout << "List after deleting from beginning: ";
    list.display();
    // List after deleting from beginning: 10 25 30 40 

    list.deleteAtEnd();
    cout << "List after deleting from end: ";
    list.display();
    // List after deleting from end: 10 25 30 

    list.deleteAtPosition(2);
    cout << "List after deleting at position 2: ";
    list.display();
    // List after deleting at position 2: 10 30 

    return 0;
}`;

export const stackArrayExample = `#include <iostream>
using namespace std;

class Stack {
private:
    int capacity;
    int top;
    int* array;

public:
    Stack(int size) {
        capacity = size;
        top = -1;
        array = new int[capacity];
    }

    ~Stack() {
        delete[] array;
    }

    bool isFull() {
        return top == capacity - 1;
    }

    bool isEmpty() {
        return top == -1;
    }

    void push(int data) {
        if (isFull()) {
            cout << "Stack overflow" << "\\n";
            return;
        }
        top++;
        array[top] = data;
    }

    int pop() {
        if (isEmpty()) {
            cout << "Stack is empty" << "\\n";
            return -1; // Error indicator
        }
        int poppedElement = array[top];
        top--;
        return poppedElement;
    }

    int peek() {
        if (isEmpty()) {
            cout << "Stack is empty" << "\\n";
            return -1; // Error indicator
        }
        return array[top];
    }
};

int main() {
    Stack myStack(5);

    myStack.push(10);
    myStack.push(20);
    myStack.push(30);

    cout << "Top element: " << myStack.peek() << "\\n";
    // Top element: 30

    while (!myStack.isEmpty()) {
        cout << "Popped: " << myStack.pop() << "\\n";
    }
    // Popped: 30
    // Popped: 20
    // Popped: 10

    return 0;
}
`;

export const stackLinkedListExample = `#include <iostream>
using namespace std;

// Node structure 
struct Node {
    int data;
    Node* next;
};

class Stack{
    private:
        Node* top;
        
    public:
        Stack(){
            top = nullptr;
        }
        
        bool isEmpty(){
            return top == nullptr;
        }
        
        void push(int value){
            Node* node = new Node();
            node->data = value;
            node->next = top;
            top = node;
        }
        
        int pop(){
            if(isEmpty()){
                cout << "Stack is empty" << "\\n";
                return -1; // Error indicator
            }
            
            int poppedElement = top->data;
            Node* temp = top;
            top = top->next;
            delete temp;
            return poppedElement;
        }
        
        int peek(){
            if(isEmpty()){
                cout << "Stack is empty" << "\\n";
                return -1; // Error indicator
            }
            return top->data;
        }
};

int main() {
    Stack myStack;

    myStack.push(10);
    myStack.push(20);
    myStack.push(30);

    cout << "Top element: " << myStack.peek() << "\\n";
    // Top element: 30

    while (!myStack.isEmpty()) {
        cout << "Popped: " << myStack.pop() << "\\n";
    }
    // Popped: 30
    // Popped: 20
    // Popped: 10

    return 0;
}`;

export const queueArrayExample = `#include <iostream>
using namespace std;

class Queue {
private:
    int *arr;      // Array to store queue elements
    int front;     // Points to the front of the queue
    int rear;      // Points to the rear of the queue
    int capacity;  // Maximum capacity of the queue
    int size;      // Current size of the queue

public:
    // Constructor
    Queue(int capacity) {
        this->capacity = capacity;
        arr = new int[capacity];
        front = 0;
        rear = -1;
        size = 0;
    }

    // Destructor to free memory
    ~Queue() {
        delete[] arr;
    }

    void enqueue(int value) {
        if (isFull()) {
            cout << "Queue is full! Cannot enqueue " << value << "\\n";
            return;
        }
        rear = (rear + 1) % capacity;  // Circular increment
        arr[rear] = value;
        size++;
        cout << "Enqueued " << value << "\\n";
    }

    int dequeue() {
        if (isEmpty()) {
            cout << "Queue is empty! Cannot dequeue." << "\\n";
            return -1;  // Return -1 to indicate underflow
        }
        int value = arr[front];
        front = (front + 1) % capacity;  // Circular increment
        size--;
        cout << "Dequeued " << value << "\\n";
        return value;
    }

    int peek() {
        if (isEmpty()) {
            cout << "Queue is empty!" << "\\n";
            return -1;
        }
        return arr[front];
    }

    bool isEmpty() {
        return size == 0;
    }

    bool isFull() {
        return size == capacity;
    }

    int getSize() {
        return size;
    }
};

int main() {
    // Create a queue of capacity 5
    Queue q(5);

    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);
    q.enqueue(40);
    q.enqueue(50);

    cout << "Front element is: " << q.peek() << "\\n";
    //Front element is: 10
    
    q.dequeue();
    q.dequeue();

    cout << "Front element after dequeue: " << q.peek() << "\\n";
    // Front element after dequeue: 30

    q.enqueue(60);

    while (!q.isEmpty()) {
        q.dequeue();
    }

    q.dequeue();  // Trying to dequeue from an empty queue
    // Queue is empty! Cannot dequeue.

    return 0;
}`;
export const queueLinkedListExample =`#include <iostream>
using namespace std;

// Node structure
struct Node {
    int data;
    Node* next;
};

class Queue {
private:
    Node* front;  // Points to the front of the queue
    Node* rear;   // Points to the rear of the queue

public:
    // Constructor
    Queue() {
        front = nullptr;
        rear = nullptr;
    }

    // Destructor to free memory
    ~Queue() {
        while (!isEmpty()) {
            dequeue();
        }
    }

    void enqueue(int value) {
        Node* temp = new Node();
        temp->data = value;
        temp->next = nullptr;
        
        if (rear == nullptr) {
            // Queue is empty, so both front and rear are the same
            front = rear = temp;
        } else {
            rear->next = temp;
            rear = temp;
        }
        cout << "Enqueued " << value << endl;
    }

    int dequeue() {
        if (isEmpty()) {
            cout << "Queue is empty! Cannot dequeue." << endl;
            return -1; // Error Indicator
        }
        
        Node* temp = front;
        int value = temp->data;
        front = front->next;
        
        if (front == nullptr) {
            rear = nullptr;  // Queue is empty
        }
        
        delete temp;
        cout << "Dequeued " << value << endl;
        return value;
    }

    int peek() {
        if (isEmpty()) {
            cout << "Queue is empty!" << endl;
            return -1;
        }
        return front->data;
    }

    bool isEmpty() {
        return front == nullptr;
    }
};

int main() {
    Queue q;

    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);
    q.enqueue(40);

    cout << "Front element is: " << q.peek() << endl;
    // Front element is: 10

    q.dequeue();
    q.dequeue();

    cout << "Front element after dequeue: " << q.peek() << endl;
    // Front element after dequeue: 30
    
    q.enqueue(50);
    q.enqueue(60);

    while (!q.isEmpty()) {
        q.dequeue();
    }

    q.dequeue();  // Trying to dequeue from an empty queue
    // Queue is empty! Cannot dequeue.

    return 0;
}
`;

export const heapExample = `#include <iostream>
#include <cassert>

class MaxHeap{
    private:
        int* arr;
        size_t maxSize;
        size_t size;

        int right(int i) { return i*2 + 1;}
        int left(int i) { return i*2 + 2;}
        int parent(int i) { return (i-1)/2;}

        void resize(int val){
            maxSize *= val;
            int* temp = new int[maxSize];

            std::copy(arr, arr + size, temp);

            delete[] arr;
            arr = temp;
        }

        void heapify(int i){
            int maxi = i;
            int l = left(i);
            int r = right(i);

            if(l < size && arr[l] > arr[maxi]) maxi = l;
            if(r < size && arr[r] > arr[maxi]) maxi = r;

            if(maxi != i)
            {
                std::swap(arr[maxi], arr[i]);
                heapify(maxi);
            }
        }

        public:
            MaxHeap() : maxSize(100), size(0) {arr = new int[maxSize];}
            ~MaxHeap() {delete[] arr;}

            MaxHeap(int* array, size_t arraySize) : maxSize(100), size(arraySize) {
                while(maxSize < arraySize){
                    maxSize *= 2;
                }

                arr = new int[maxSize];
                std::copy(array, array + arraySize, arr);

                for(int i=(size/2)-1; i >= 0; --i){
                    heapify(i);
                }
            }

            size_t getSize() const{
                return size;
            }

            bool isEmpty() const {
                return size == 0;
            }

            int getMax() const {
                assert(size != 0);
                return arr[0];
            }

            int extractMax(){
                assert(size != 0);

                int res = arr[0];
                std::swap(arr[0], arr[--size]);
                heapify(0);

                if((size <= (maxSize / 4)) && maxSize > 100) resize(0.5);

                return res;
            }

            void insert(int val){
                if(size >= maxSize)
                {
                    resize(2);
                }
                int idx = size;
                ++size;
                arr[idx] = val;

                while(idx > 0 && arr[parent(idx)] < val)
                {
                    std::swap(arr[idx], arr[parent(idx)]);
                    idx = parent(idx);
                }
            }

            void print() const {
                for(auto i=0; i < size; ++i){
                    std::cout << arr[i] << " ";
                }
                std::cout << "\\n";
            }


};

int main(){
    MaxHeap heap;

    heap.insert(10);
    heap.insert(20);
    heap.insert(5);
    heap.insert(30);
    heap.insert(25);

    std::cout << "Heap: ";
    heap.print();

    std::cout << "Maximum element: " << heap.getMax() << std::endl;

    std::cout << "Extracted maximum element: " << heap.extractMax() << std::endl;
    std::cout << "Heap after extraction: ";
    heap.print();
    std::cout << "Extracted maximum element: " << heap.extractMax() << std::endl;
    std::cout << "Heap after extraction: ";
    heap.print();
    std::cout << "Extracted maximum element: " << heap.extractMax() << std::endl;
    std::cout << "Heap after extraction: ";
    heap.print();

    std::cout << "Array before passing to MaxHeap: ";
    int arr[] = {4, 6, 2, 1, -2, -6, 6, 9, 10};
    for(auto i=0; i < 9; ++i){
        std::cout << arr[i] << " ";
    }
    std::cout << "\\n";

    std::cout << "Heap created from array: ";
    MaxHeap h1(arr, 9);
    h1.print();

    return 0;
}`
