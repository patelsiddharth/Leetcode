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
    
    let count = 0, prev = null;
    temp = head;
    while(temp !== null)
    {
        count++;
        
        if(count === len - n + 1)
        {
            if(prev === null)
            {
                head = head.next;
            }
            else
            {
                prev.next = temp.next;
                temp.next = null;
            }
            break;
        }
        
        prev = temp;
        temp = temp.next;
    }
    
    return head;
};