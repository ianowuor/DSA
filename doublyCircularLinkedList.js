/*
    A Doubly Circular linked list is a more complex type of linked list that 
    contains a pointer to the next as well  as the previous node in the sequence
    The circular doubly linked list does not contain null in the previous field
    of the first node.

*/

class DoublyCircularLinkedList {
    constructor (data) {
        this.head = new Node(data);
        this.end = this.head;
        this.head.next = this.end;
        this.head.prev = this.end;
        this.end.next = this.head;
        this.end.prev = this.head;
    }

    // Add Node at the end of linked list
    append (data) {
        this.end.next = new Node(data);
        this.end.next.next = this.head;
        this.end.next.prev = this.end;
        this.end = this.end.next;
    }

    // Print the contents of the linked list
    display () {
        let current = this.head;
        while (current) {
            console.log(current.data);
            if (current.next == this.head) {
                break;
            }
            current = current.next;
        }
    }

    // Delete head node of linked list
    deleteHead () {
        let data = this.head.data;
        this.head = this.head.next;
        this.head.prev = this.end;
        this.end.next = this.head;
    }

    // Function to delete end node of linked list
    deleteEnd () {
        let data = this.end.data;
        this.end = this.end.prev;
        this.end.next = this.head;
    }

    // Delete Node with specified key
    deleteNode (key) {
        if (this.head.data == key) {
            this.deleteHead();
            return key;
        }

        let current = this.head.next;
        while (current) {
            if (current.data == key) {
                current.prev.next = current.next;
                current.next.prev = current.prev;
                return key;
            }

            current = current.next;
        }

        return null;
    }

    // Traverse linked list
    traverse () {
        let current = this.head;
        let dataElements = [];
        while (current) {
            dataElements.push(current.data);
            if (current.next == this.head) {
                break;
            }

            current = current.next;
        }

        return dataElements;
    }

    // Return data elements in all nodes in reverse order
    reverse () {
        let dataElements = this.traverse();
        let reversedList = [];

        for (let i = dataElements.length - 1; i >= 0; i--) {
            reversedList.push(dataElements[i]);
        }

        return reversedList;
    }

    // Add node before the head node
    replaceHeadNode (data) {
        this.end.next = new Node(data);
        this.head.prev = this.end.next;
        this.end.next.next = this.head;
        this.head = this.end.next;
    }
}

class Node {
    constructor (data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }

    // Add node after this node instance
    addNodeAfter (data) {
        this.next.prev = new Node(data);
        this.next.prev.next = this.next;
        this.next = this.next.prev;
        this.next.prev = this;
    }
}

let numbers = new DoublyCircularLinkedList(10);
numbers.append(20);
numbers.append(30);
numbers.append(40);
numbers.append(50);
numbers.replaceHeadNode(5);

let current = numbers.head;

while (current) {
    if (current.data == 40) {
        current.addNodeAfter(45);
        break;
    }

    current = current.next;
}

console.log(numbers.traverse());
console.log(numbers.reverse());
numbers.deleteHead();
numbers.deleteEnd();
numbers.deleteNode(40);

numbers.display();
 