/*
    A circular linked list is that in which the last node contains the pointer
    to the first node of the list.

    End -> Head -> Node -> Node -> Node -> End -> Head
*/

class CircularLinkedList {
    constructor (data) {
        this.head = new Node(data);
        this.end = this.head;
        this.head.next = this.end;
        this.end.next = this.head;
    }

    // Add Node at the end of the Linked list
    append (data) {
        this.end.next = new Node(data);
        this.end = this.end.next;
        this.end.next = this.head;
    }

    // Function to print the content of circular linked list
    display () {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
            if (current == this.head) {
                break;
            }
        }
    }

    // Function to delete head node of linked list 
    deleteHead () {
        let data = this.head.data;
        this.head = this.head.next;
        this.end.next = this.head;
        return data;
    }

    // Function to delete end node of linked list
    deleteEnd () {
        let data = null;
        if (this.head.next == this.head) {
            data = this.deleteHead();
            return data;
        }

        data = this.end.data;
        let current = this.head;
        while (current) {
            if (current.next == this.end) {
                // current.next = this.head;
                this.end = current;
                this.end.next = this.head; 
                break;   
            }

            current = current.next;
        }

        return data;
    }

    // Delete node with specified key
    deleteNode (key) {
        let data = null;
        if (this.head.data == key) {
            data = this.deleteHead();
            return data;
        }

        let current = this.head;
        while (current) {
            if (current.next.data == key) {
                data = current.data;
                current.next = current.next.next;
                break;
            }

            current = current.next;
        }
    }

    // Traverse Linked List 
    traverse () {
        let dataElements = [];
        let current = this.head;
        while (current) {
            dataElements.push(current.data);
            if (current == this.end) {
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

    // Add Node before the head node
    replaceHeadNode (data) {
        this.end.next = new Node(data);
        this.end.next.next = this.head;
        this.head = this.end.next;
    }
}

class Node {
    constructor (data) {
        this.data = data;
        this.next = null;
    }
}

let numbers = new CircularLinkedList(10);
numbers.append(20);
numbers.append(30);
numbers.append(40);
numbers.append(50);
numbers.replaceHeadNode(5);

console.log(numbers.traverse());
console.log(numbers.reverse());

let node = numbers.head;
for (let i = 0; i <= 10; i++) {
    console.log(node.data);
    node = node.next;
}

numbers.deleteHead();
numbers.deleteEnd();
numbers.deleteNode(30);
numbers.deleteNode(40);

console.log("Displaying Numbers");
numbers.display();