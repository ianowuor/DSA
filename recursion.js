function factorial (n) {
    if (n == 1) 
        return 1;
    else 
        return n * factorial(n - 1);
}

console.log(factorial(5));

function collatz (n) {
    if (n == 1)
        return 1
    else if (n % 2 == 0) 
        return 1 + collatz(n / 2)
    else 
        return 1 + collatz(n * 3 + 1)
}

console.log(collatz(5));
console.log(collatz(7));
