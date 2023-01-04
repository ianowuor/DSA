/*  
    A stack is a liner data structure that follows the principle of Last In First
    Out (LIFO). This means that the last element inserted the stack is removed first
*/

class Stack {
    constructor (maxSize) {
        this.stack = [];
        this.count = 0;
        this.maxSize = maxSize;
    }

    push (element) {
        if (this.isFull()) {
            return 'Stack Full';
        } else {
            this.stack[this.count] = element;
            this.count += 1;
            return `${element} added to stack`;
        }
    } 

    pop () {
        if (this.isEmpty()) {
            return undefined;
        } else {
            let deletedElement = this.stack[this.count - 1];
            this.count -= 1;
            return deletedElement;
        }
    }

    size () {
        return this.count;
    }

    print () {
        let output = [];
        for (let i = 0; i < this.count; i++) {
            output[i] = this.stack[i];
        }
        console.log(output);
    }

    peek () {
        return this.stack[this.count - 1];
    }

    isEmpty () {
        this.size() == 0 ? true : false;
    }

    isFull () {
        if (this.count == this.maxSize) {
            return true;
        }

        return false;
    }
}

let numbers = new Stack(5);
console.log(numbers.push(10));
console.log(numbers.push(20));
console.log(numbers.push(30));
console.log(numbers.push(40));
console.log(numbers.push(50));
console.log(numbers.push(60));
console.log(numbers.push(70));
console.log(numbers.push(100));

numbers.print();
numbers.pop();
numbers.print();
numbers.push(65);
numbers.print();




