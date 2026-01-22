/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let temp = head, prev= null;
    while (temp !== null) {
        if (temp.val === val) {
            if (prev !== null) {
                prev.next = temp.next;
            } else {
                head = temp.next;
            }
            temp = temp.next;
            continue;
        }
        prev = temp;
        temp = temp.next;
    }
    return head;
};