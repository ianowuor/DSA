// Using a For Loop

let prev2 = 0;
let prev1 = 1;
let newFibo;

console.log("Fibonacci using For Loop");
console.log(prev2);
console.log(prev1);

for (let i = 0; i <= 17; i++) {
    newFibo = prev2 + prev1;
    console.log(newFibo);
    prev2 = prev1;
    prev1 = newFibo;
}

// Using Recursion

function printNumbers (number) {
    console.log(number);
}

function fibonacci (prev1, prev2, count = 0) {
    if (count <= 19) {
        const newfibo = prev1 + prev2;
        printNumbers(newfibo);

        fibonacci (newfibo, prev1, count + 1);
    }
}

console.log("Fibonacci using Recursion")
printNumbers(0);
printNumbers(1);
fibonacci(1, 0);