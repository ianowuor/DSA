let numbers = [23, 67, 90, 4, 56, 17, 45];
let n = numbers.length;

for (let i = 0; i < n; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
        if (numbers[j] < numbers[minIndex]) {
            minIndex = j;
        }
    }

    // Swap elements using destructuring syntax
    [numbers[i], numbers[minIndex]] = [numbers[minIndex], numbers[i]];
}


console.log(numbers);
