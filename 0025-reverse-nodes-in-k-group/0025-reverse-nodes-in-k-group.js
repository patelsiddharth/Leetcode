/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverse = (head) => {
    let temp = head, prev = null;
    while (temp !== null) {
        let next = temp.next;
        temp.next = prev;
        prev = temp;
        temp = next;
    }
    return prev;
}

const getKthNode = (head, k) => {
    let temp = head;
    while(temp != null) {
        if(--k === 0) break;
        temp = temp.next;
    }
    return temp;
}

var reverseKGroup = function(head, k) {
    let temp = head, prevNode = null;
    while(temp !== null) {
        let kthNode = getKthNode(temp, k);
        
        if (kthNode === null) break;
        
        let nextNode = kthNode.next
        kthNode.next = null;

        const newHead = reverse(temp);

        if (temp === head) {
            head = newHead;
        } else {
            prevNode.next = kthNode;
        }
        temp.next = nextNode;
        prevNode = temp;
        temp = temp.next;
    }
    return head;
};