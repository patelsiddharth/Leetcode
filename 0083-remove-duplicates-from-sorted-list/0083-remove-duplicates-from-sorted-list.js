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
var deleteDuplicates = function(head) {
    if (head === null || head.next === null) return head;
    let prev = head, curr = head.next;
    while (curr !== null) {
        if (prev.val === curr.val) {
            let next = curr.next;
            prev.next = curr.next;
            curr.next = null;
            curr = next;
        } else {
            prev = curr;
            curr = curr.next;
        }
    }
    return head;
};