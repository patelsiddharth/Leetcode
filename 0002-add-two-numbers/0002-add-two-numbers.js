/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0, curr1 = l1, curr2 = l2;
    let head = new ListNode();
    let curr = head;
    while(curr1 !== null || curr2 !== null) {
        let sum = carry;
        sum += curr1 ? curr1.val : 0;
        sum += curr2 ? curr2.val : 0;

        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);

        curr = curr.next;
        curr1 && (curr1 = curr1.next);
        curr2 && (curr2 = curr2.next);
    }
    if (carry > 0) {
        curr.next = new ListNode(carry);
    }
    return head.next;
};