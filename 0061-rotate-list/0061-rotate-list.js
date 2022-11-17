/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let len = 0, temp = head;
    while(temp !== null)
    {
        len++;
        temp = temp.next;
    }
    
    if(head === null || len === 1)
        return head;
    
    k = k % len;
    
    let count = 0, node = head, prev = null;
    
    while(true)
    {
        if(count === len - k)
        {
            temp = head;
            head = node;
            prev.next = null;
        }
        count++;
        prev = node;
        
        if(node.next === null)
        {
            node.next = temp;
            break;
        }
        else
            node = node.next;
    }
    
    return head;
    
};