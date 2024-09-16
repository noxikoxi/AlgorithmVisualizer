export function generateRandomNumbers(size: number, min: number, max: number): number[] {
    const numbers: number[] = [];
    for (let i = 0; i < size; i++) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.push(randomNum);
    }
    return numbers;
}