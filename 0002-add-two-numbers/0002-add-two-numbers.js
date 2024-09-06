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
    let t1 = l1, t2 = l2, carry = 0;
    let head = new ListNode(-1);
    let temp = head;
    while(t1 !== null || t2 !== null)
    {
        let sum = carry;
        if(t1)
        {
            sum += t1.val
        }
        if(t2)
        {
            sum += t2.val;
        }
    
        carry = Math.floor(sum / 10);
        
        temp.next = new ListNode(sum % 10);
        temp = temp.next;
            
        t1 && (t1 = t1.next);
        t2 && (t2 = t2.next);
    }
    
    if(carry !== 0)
    {
        temp.next = new ListNode(carry);
    }
    
    return head.next;
};