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
var rotateRight = function(head, k) {
    if (head === null || head.next === null) return head;

    let len = 1, count = 0, curr = head;
    while (curr.next != null) {
        len++;
        curr = curr.next;
    }
    
    k = k % len;
    if (k === 0) return head;
    
    curr.next = head;

    curr = head;
    while(curr !== null) {
        count++;
        if (count === len - k) {
            head = curr.next;
            curr.next = null;
        }
        curr = curr.next;
    }
    return head;
};