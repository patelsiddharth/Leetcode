/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let temp = head, obj = new Map();
    while(temp !== null)
    {
        if(obj.has(temp))
        {
            return true;
        }
        obj.set(temp, 1);
        temp = temp.next;
    }
    return false;
};