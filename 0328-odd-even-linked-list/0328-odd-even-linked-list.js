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
var oddEvenList = function(head) {
    if(head === null)
    {
        return head;
    }
    
    let prev = head, curr = head.next, head2 = head.next;
    
    while(curr !== null && curr.next !== null)
    {
        prev.next = curr.next;
        curr.next = curr.next.next;
        prev = prev.next;
        curr = curr.next;
    }
    
    prev.next = head2;
    
    return head;
};