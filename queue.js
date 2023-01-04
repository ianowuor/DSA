/*
    Queue follows the First in first Out (FIFO) rule
    the item that goes in first is the the item that comes out first

*/

class Queue {
    constructor (maxSize) {
        this.queue = [];
        this.rear = 0;
        this.front = 0;
        this.count = 0;
        this.maxSize = maxSize;
    }

    enqueue (element) {
        if (!this.isFull()) {
            this.queue[this.rear] = element;
            this.rear += 1;
            this.count += 1;
            return `${element} added to queue`;
        } else {
            return 'Stack Full';
        }
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

    isFull () {
        return this.count == this.maxSize ? true : false;
    }

    print () {
        let output = [];
        let index = 0;
        for (let i = this.front; i <= this.rear - 1; i++) {
            output[index] = this.queue[i];
            index += 1;
        }

        console.log(output);
    }

    reset () {
        this.queue = [];
    }

}

let numbers = new Queue(5);

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
numbers.enqueue(21);
numbers.enqueue(22);
numbers.enqueue(23);
numbers.enqueue(24);
console.log(numbers.enqueue(25));
console.log(numbers.enqueue(26));
console.log(numbers.enqueue(27));

numbers.print();


