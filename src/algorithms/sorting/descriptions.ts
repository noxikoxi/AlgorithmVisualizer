export const bubbleSortDescription = "Simple comparison-based, stable sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The process is repeated until the list is sorted. The algorithm gets its name because smaller elements 'bubble' to the top of the list (beginning) with each pass, much like bubbles rising in water.";
export const bubbleSortTodo = [
"Start at the beginning of the list.",
`Compare the first two elements:
- If the first element is greater than the second, swap them.
- If not, move to the next pair.`,
"Continue comparing and swapping adjacent elements until the end of the list is reached. This completes one 'pass'.",
`Repeat the process for the remaining unsorted part of the list:
- After each pass, the largest unsorted element is placed in its correct position at the end of the list.`
]

export const selectionSortDescription = "Selection Sort is a straightforward, stable comparison-based sorting algorithm. It works by repeatedly selecting the smallest (or largest, depending on the order) element from the unsorted portion of the list and placing it in the correct position. Although its not the most efficient for large datasets, it’s easy to understand and implement, making it a good learning tool for basic sorting concepts."
export const selectionSortTodo = [
    "Iterate through array and find the highest value [or the lowest]",
    "Swap it with the first index of the array",
    "Now iterate through array again, but start from the next index",
    "Swap found value with the index you started searching from",
    "Repeat this untill the last index of array",
    "After each pass one element is inserted in it's correct position"
]

export const insertionSortDescription = "Insertion sort is a simple, intuitive, stable and easy to implement sorting algorithm that builds the sorted array one item at a time. The algorithm iterates through the array, taking one unsorted element in each pass and inserting it into its correct position relative to the already sorted elements. The difference betweeen Selection Sort and Insertion Sort is that after each pass in Selection sort an element will be in its 'absolute' correct position, when in Insertion Sort this element will be in its relative correct position. Meaning each element is shifted to the left untill the next element is greater/lower."
export const insertionSortTodo = [
    "Algorithm starts considering the first element is already sorted",
    "Then it picks the next unsorted element and compares it with the elements before it (already sorted)",
    "It shifts all elements that are greater/lower one position to the right",
    "After it slected element is inserted in it's correct position",
    "This process repeats for all elements until the entire arrays is sorted",
    "In each step array is sorted to the select item first position",
    "On the other hand we can say that selected element is shifted to the left untill the next element is greater/lower"
]