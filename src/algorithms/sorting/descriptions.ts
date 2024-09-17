export const bubbleSortDescription = "Simple comparison-based sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The process is repeated until the list is sorted. The algorithm gets its name because smaller elements 'bubble' to the top of the list (beginning) with each pass, much like bubbles rising in water.";
export const bubbleSortTodo = [
"Start at the beginning of the list.",
`Compare the first two elements:
- If the first element is greater than the second, swap them.
- If not, move to the next pair.`,
"Continue comparing and swapping adjacent elements until the end of the list is reached. This completes one 'pass'.",
`Repeat the process for the remaining unsorted part of the list:
- After each pass, the largest unsorted element is placed in its correct position at the end of the list.`
]

export const selectionSortDescription = "Selection Sort is a straightforward comparison-based sorting algorithm. It works by repeatedly selecting the smallest (or largest, depending on the order) element from the unsorted portion of the list and placing it in the correct position. Although it’s not the most efficient for large datasets, it’s easy to understand and implement, making it a good learning tool for basic sorting concepts."
export const selectionSortTodo = [
    "Iterate through array and find the highest value [or the lowest]",
    "Swap it with the first index of the array",
    "Now iterate through array again, but start from the next index",
    "Swap found value with the index you started searching from",
    "Repeat this untill the last index of array",
    "After each pass one element is inserted in it's correct position"
]
