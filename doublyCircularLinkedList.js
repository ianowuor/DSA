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
}

class Node {
    constructor (data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

let numbers = new DoublyCircularLinkedList(10);
numbers.append(20);
numbers.append(30);
numbers.append(40);
numbers.append(50);
numbers.deleteHead();
numbers.deleteEnd();

numbers.display();
 