/*
    A circular linked list is that in which the last node contains the pointer
    to the first node of the list.

    End -> Head -> Node -> Node -> Node -> End -> Head
*/

class CircularLinkedList {
    constructor (data) {
        this.head = new Node(data);
        this.end = null;
        this.head.next = this.end;
    }

    // Add Node at the end of the Linked list
    addNode (data) {
        if (this.head.next == null) {
            this.end = new Node(data);
            this.head.next = this.end;
            this.end.next = this.head;
        } else {
            this.end.next = new Node(data);
            this.end = this.end.next;
            this.end.next = this.head;
        }
    }
}

class Node {
    constructor (data) {
        this.data = data;
        this.next = null;
    }
}

let numbers = new CircularLinkedList(10);
numbers.addNode(20);
numbers.addNode(30);
numbers.addNode(40);
numbers.addNode(50);

let node = numbers.head;
for (let i = 0; i <= 10; i++) {
    console.log(node.data);
    node = node.next;
}
