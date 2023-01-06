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


}

// Node Class Definition 
class Node {
    constructor (data) {
        this.data = data;
        this.prev = null;
        this.next = null;
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
console.log(numbers.traverse());


