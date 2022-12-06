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
    if(head === null) return null;
    
    let temp = head,
        oddHead = new ListNode(),
        evenHead = new ListNode(),
        odd = oddHead,
        even = evenHead;
    
    while(temp !== null)
    {
        odd.next = temp;
        odd = odd.next;
        
        even.next = temp.next;
        even = even.next;
        
        temp = (temp.next !== null) ? temp.next.next : null;
    }
    
    odd.next = evenHead.next;
    return oddHead.next;
};