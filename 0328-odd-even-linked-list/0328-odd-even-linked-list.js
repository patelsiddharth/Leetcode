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
    
    let odd = head, even = head.next, evenHead = head.next;
    
    while(even !== null && even.next !== null)
    {
        odd.next = even.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
    }
    
    odd.next = evenHead;
    
    return head;
};