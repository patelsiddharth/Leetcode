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
    let map = new Map(), temp = headA;
    while(temp !== null) {
        map.set(temp, 1);
        temp = temp.next;
    }

    temp = headB;
    while (temp !== null) {
        if (map.has(temp)) {
            break;
        }
        temp = temp.next;
    }
    return temp;
};