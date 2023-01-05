/*
    A circular queue is the extended version of a regular queue where 
    the last element is connected to the first element. Thus forming 
    a circle-like structure.

*/

class CircularQueue {
    constructor (maxSize) {
        this.queue = [];
        this.maxSize = maxSize;
        this.front = -1;
        this.rear = -1;
        this.count = 0;
    }

    enqueue (data) {
        if (this.isFull()) {
            return 'Queue Full';
        }

        let nextIndex = (this.rear + 1) % this.maxSize;
        this.queue[nextIndex] = data;
        this.rear += 1;
        this.count += 1;
        return `${data} added`;
    }

    dequeue () {
        if (this.isEmpty()) {
            return undefined;
        }

        let data = this.queue[(this.front + 1) % this.maxSize];
        this.front += 1;
        this.count -= 1;
        this.queue[this.front] = null;
        return `${data} removed from queue`;
    }

    isFull () {
        return this.count == this.maxSize ? true : false;
    }

    isEmpty () {
        return this.count == 0 ? true : false;
    }

    peek () {
        return this.queue[(this.front + 1) % this.maxSize];
    }

    reset () {
        this.queue = [];
    }
}

let numbers = new CircularQueue(5);

for (let i = 1; i < 6; i++) {
    console.log(numbers.enqueue(i * 10));
}

console.log(numbers.queue);

for (let i = 0; i <= 1; i++) {
    console.log(numbers.dequeue());
}

console.log(numbers.queue);

numbers.enqueue(60);

console.log(numbers.queue);

numbers.enqueue(70);

console.log(numbers.enqueue(80));

console.log(numbers.queue);


