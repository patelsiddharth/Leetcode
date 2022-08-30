// Create linked list from given array : [3, 1, 2]

const num = [3, 1, 2];

class NodeList {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// N^2 complexity
const createLinkedList1 = function(root, num) {
    if (num.length === 0)
        return null;

    for (let i = 0; i < num.length; i++) {
        let temp = new NodeList(num[i]);
        if (root === null) {
            root = temp;
        }
        else {
            let t = root;
            while (t.next != null) {
                t = t.next;
            }
            t.next = temp;
        }
    }

    return root;
}

// N Complexity
const createLinkedList2 = function(root, arr) {
    if (arr.length === 0)
        return null;

    for (let i = arr.length - 1; i >= 0; i--) {
        let tempNode = new NodeList(arr[i]);
        tempNode.next = root;
        root = tempNode;
    }
    
    return root;
}


const displayLinkedList = function(root) {
    let temp = root;
    while (temp != null) {
        console.log(temp.val)
        temp = temp.next;
    }
}

let root1 = createLinkedList1(null, num);
let root2 = createLinkedList2(null, num);
displayLinkedList(root1)
displayLinkedList(root2)
