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
    let map = new Map(), temp = head;
    while (temp !== null) {
        if(map.has(temp)) return true;
        map.set(temp);
        temp = temp.next;
    }
    return false;
};