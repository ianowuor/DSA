/*
    A circular queue is the extended version of a regular queue where 
    the last element is connected to the first element. Thus forming 
    a circle-like structure.

*/

class circularQueue {
    constructor (maxSize) {
        this.queue = [];
        this.maxSize = maxSize;
        this.front = 0;
        this.rear = 0;
        this.count = 0;
    }

    isEmpty () {
        return this.count == 0 ? true : false;
    }

    isFull () {
        return this.count == this.maxSize ? true : false;
    }

    enqueue (element) {
        if (this.isFull()) {
            return 'Stack Full';
        } 

        if ((this.rear == this.maxSize) && this.front > 0) {
            let availableIndices = [];
            for (let i = 0; i < this.front; i++) {
                availableIndices.push(i);
            }

            this.queue[availableIndices[availableIndices.length - 1]] = element;
            this.front -= 1;
            this.count += 1;
            return `${element} added to cqueue`
        }

        this.queue[this.rear] = element;
        this.rear += 1;
        this.count += 1;
        return `${element} added to queue`;
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
}

let numbers = new circularQueue(5);

for (let i = 1; i <= 5; i++) {
    numbers.enqueue(i * 10);
}

console.log(numbers.queue);

for (let i = 1; i > -1; i--) {
    console.log(`${numbers.dequeue()} removed from queue`);
}

console.log(numbers.enqueue(60));
console.log(numbers.enqueue(70));
console.log(numbers.enqueue(80));

console.log(numbers.queue);



