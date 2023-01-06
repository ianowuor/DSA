/* 
    A Linked List consists of nodes where each node contains a data field and
    a referrence (link) to the next node in the linked list.

*/


class LinkedList {

    // Function to initialize the Linked List Object
    constructor () {
        this.head = null;
    } 

    // Prints data elements in all nodes
    printList () {
        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }

    // Add a new node before the head of the linked list
    push (data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Add new node at the end of the linked list
    append (data) {
        let lastNode = new Node(data);
        let node = this.head;

        while (node) {
            if (!node.next) {
                node.next = lastNode; 
                break;
            }

            node = node.next;
        }
    }

    // Delete head node
    deleteHead () {
        let data = this.head.data;
        this.head = this.head.next;
        return data;
    }

    // Delete node at the end of linked list object
    deleteEnd () {
        let node = this.head;
        while (node) {
            if (!node.next.next) {
                let data = node.next.data;
                node.next = null;
                return data;
            }

            node = node.next;
        }
    }

}

class Node {

    // Function to initialize the node object
    constructor (data) {
        this.data = data;
        this.next = null;
    }

    // Insert new node after referenced by this object instance
    insertAfter (node) {
        this.next = node.next;
        node.next = this;
    }

    // Delete next node
    deleteNext () {
        let data = this.next.data;
        this.next = this.next.next;
        return data;
    }
}

// Initialize empty linked list object

let linkedlist = new LinkedList();
linkedlist.head = new Node(10);

let second = new Node(20);
let third = new Node(30);

linkedlist.head.next = second;
second.next = third;

// Add new node before the head node
linkedlist.push(5);

let fourth = new Node(25);
fourth.insertAfter(second);
linkedlist.append(40);
linkedlist.append(50);

linkedlist.deleteHead();
linkedlist.deleteEnd();
console.log(`${fourth.deleteNext()} deletd`);

linkedlist.printList();