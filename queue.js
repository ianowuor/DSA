/*
    Queue follows the First in first Out (FIFO) rule
    the item that goes in first is the the item that comes out first

*/

class Queue {
    constructor () {
        this.queue = [];
        this.rear = 0;
        this.front = 0;
        this.count = 0;
    }

    enqueue (element) {
        this.queue[this.rear] = element;
        this.rear += 1;
        this.count += 1;
    }

    dequeue () {
        if (this.isEmpty()) {
            return undefined;
        }

        let deletedElement = this.queue[this.front];
        this.front += 1;
        this.count -= 1;
        return deletedElement;
    }

    isEmpty () {
        return this.count == 0 ? true : false;
    }

}

let numbers = new Queue();

numbers.enqueue(10);
numbers.enqueue(20);

console.log(numbers.queue);

console.log(numbers.dequeue());
console.log(numbers.dequeue());
console.log('Count: ' + numbers.count);
console.log(numbers.dequeue());

numbers.enqueue(30);
console.log(numbers.queue);
console.log('Count: ' + numbers.count);
console.log(numbers.dequeue());


