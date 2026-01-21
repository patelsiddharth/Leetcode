/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let temp1 = headA, temp2 = headB;

    while(true) {
        if (temp1 === temp2) return temp1;
        if (temp1.next === null && temp2.next === null) break;

        temp1 = (temp1.next === null) ? headB : temp1.next;
        temp2 = (temp2.next === null) ? headA : temp2.next;
    }

    return null;
};