let numbers = [7, 4, 9, 2, 5, 4, 2, 7, 8, 11];
let n = numbers.length;

for (let i = 0; i < n -1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
        if (numbers[j] > numbers[j + 1]) {
            [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
            swapped = true;
        }
    }

    if (!swapped) {
        break;
    }
}

console.log(`Sorted array: ${numbers}`);
