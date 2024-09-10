/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let len = 0, temp = head;
    while(temp !== null)
    {
        len++;
        temp = temp.next;
    }
    
    if(len === n)
    {
        head = head.next;
        return head;
    }
    
    let count = len - n;
    temp = head;
    while(temp !== null)
    {
        
        count--;
        if(count === 0)
        {
            temp.next = temp.next ? temp.next.next : null;
            break;
        }
        temp = temp.next;
    }
    
    return head;
};