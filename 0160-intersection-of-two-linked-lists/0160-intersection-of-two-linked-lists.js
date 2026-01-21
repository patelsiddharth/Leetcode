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
    let temp1 = headA, temp2 = headB, c1 = 0, c2 = 0, prev = null;

    while(temp1 !== null) {
        c1++;
        temp1 = temp1.next;
    }
    while(temp2 !== null) {
        c2++;
        temp2 = temp2.next;
    }
    
    let diff = Math.abs(c1 - c2)
    let temp = c1 > c2 ? headA : headB;
    while(diff) {
        diff--;
        temp = temp.next;
    }

    if(c1 > c2) {
        temp1 = temp;
        temp2 = headB;
    } else {
        temp1 = headA;
        temp2 = temp;
    }

    while(temp1 !== null && temp2 !== null) {
        if(temp1 === temp2) {
            return temp1;
        }

        temp1 = temp1.next;
        temp2 = temp2.next;
    }

    return null;
};