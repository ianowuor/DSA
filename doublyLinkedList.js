/*
    A doubly linked list is a type of linked list that contains a pointer to the
    next as well as the previous node in sequence

    Head <-> Node <-> Node <-> Node <-> Node  

*/

// Doubly linked list Class Definition
class DoublylinkedList {
    constructor () {
        this.head = null;
        this.rear = null;
    }

    // Add Node to the doubly linked list
    addNode (data) {
        if (!this.head) {
            this.head = new Node(data);
            this.rear = this.head;
        } else if (!this.head.next) {
            this.rear = new Node (data);
            this.rear.prev = this.head;
            this.head.next = this.rear;
        } else {
            // let prev = this.rear;
            // this.rear = new Node (data);
            // this.rear.prev = prev;
            let prev = this.rear;
            prev.next = new Node (data);
            prev.next.prev = prev;
            this.rear = prev.next;
        }
    }

    // Print data elements in all nodes
    printList () {
        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }

    // Traverse a linked list -> Forward
    traverse () {
        let dataElements = [];
        let node = this.head;
        while (node) {
            dataElements.push(node.data);
            node = node.next;
        }

        return dataElements;
    }

    // Treaverse a linke list -> Reverse
    reverse () {
        let dataElements = [];
        let node = this.rear;
        while (node) {
            dataElements.push(node.data);
            node = node.prev;
        }

        return dataElements;
    }

    // Add Node before the head node
    replaceHeadNode (data) {
        let headNode = this.head;
        this.head = new Node(data);
        this.head.next = headNode;
        headNode.prev = this.head;
    }

    // Delete head Node
    deleteHead () {
        let data = this.head.data;
        this.head = this.head.next;
        this.head.prev = null;
        return data;
    }

    // Delete rear node
    deleteRear () {
        let data = this.rear.data;
        this.rear = this.rear.prev;
        this.rear.next = null;
        return data;
    }

    // Delete node with a specific key
    deleteNode (key) {
        let data = null;
        if (this.head.data == key) {
            data = this.deleteHead();
            return data;
        }

        if (this.rear.data == key) {
            data = this.deleteRear();
            return data;
        }

        let node = this.head.next;
        while (node) {
            if (node.data == key) {
                data = node.data;
                node.prev.next = node.next;
                node.next.prev = node.prev;
                break;
            }

            node = node.next;
        }

        return data;
    }
}

// Node Class Definition 
class Node {
    constructor (data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }

    // Add node after this node instance
    addNodeAfter (data) {
        let nextNode = this.next;
        this.next = new Node(data);
        this.next.prev = this;
        this.next.next = nextNode;
        nextNode.prev = this.next;
    }

    // Add node before this node instance
    addNodeBefore (data) {
        let prevNode = this.prev;
        this.prev = new Node(data);
        this.prev.prev = prevNode;
        this.prev.next = this;
        prevNode.next = this.prev;
    }
}

// DoublyLinkedList() object instance
let numbers = new DoublylinkedList();

numbers.addNode(10);
numbers.addNode(20);
numbers.addNode(30);
numbers.addNode(40);
numbers.addNode(50);

numbers.printList();
numbers.replaceHeadNode(5);

let node = numbers.head;

while (node) {
    if (node.data == 20) {
        node.addNodeAfter(25);
        break;
    }

    node = node.next;
}

node = numbers.rear;
 while (node) {
    if (node.data == 40) {
        node.addNodeBefore(35);
        break;
    }

    node = node.prev;
 }

 console.log(numbers.deleteHead());
 console.log(numbers.deleteRear());
 console.log(numbers.deleteNode(25));

console.log(numbers.traverse());
console.log(numbers.reverse());


