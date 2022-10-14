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
var deleteMiddle = function(head) {
    if(head.next === null)
        return null;
    
    let slow = head, fast = head, prev = head;
    while(fast !== null && fast.next !== null)
    {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    
    prev.next = slow.next;
    return head;
};