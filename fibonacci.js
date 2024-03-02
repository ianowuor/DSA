// Implimentation Using a For Loop

let prev2 = 0;
let prev1 = 1;
let newFibo;

console.log(prev2);
console.log(prev1);

for (let i = 0; i <= 17; i++) {
    newFibo = prev2 + prev1;
    console.log(newFibo);
    prev2 = prev1;
    prev1 = newFibo;
}