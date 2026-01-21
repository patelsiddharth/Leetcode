/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slow = head, count = 0;
    while (slow !== null ) {
        count++;
        slow = slow.next;
    }
    if (count % 2 === 0) {
        count = count / 2;
    } else {
        count = Math.floor(count / 2);
    }
    slow = head;
    while(count) {
        count--;
        slow = slow.next;
    }

    return slow;
};