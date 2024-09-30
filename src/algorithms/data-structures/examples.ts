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
    cout << "Sum: " << sum << endl;
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
            cout << "List is empty" << endl;
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
            cout << "List is empty" << endl;
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
            cout << "List is empty" << endl;
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

    // Function to display the list
    void display() {
        if (head == nullptr) {
            cout << "List is empty" << endl;
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

    // Displaying the list
    cout << "List after insertion: ";
    list.display();

    // Deleting elements
    list.deleteAtBeginning();
    cout << "List after deleting from beginning: ";
    list.display();

    list.deleteAtEnd();
    cout << "List after deleting from end: ";
    list.display();

    list.deleteAtPosition(2);
    cout << "List after deleting at position 2: ";
    list.display();

    return 0;
}`;
