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