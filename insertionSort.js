let myArray = [637, 692, 7123, 234, 471, 2138, 9402, 7383];
let n = myArray.length;

for (let i = 1; i < n; i++) {
    const currentValue = myArray[i];
    let insertIndex = i;

    for (let j = i - 1; j >= 0; j--) {
        if (myArray[j] > currentValue) {
            myArray[j + 1] = myArray[j];
            insertIndex--;
        } else {
            break;
        }
    }

    myArray[insertIndex] = currentValue;
}

console.log(`Sorted array: ${myArray}`);