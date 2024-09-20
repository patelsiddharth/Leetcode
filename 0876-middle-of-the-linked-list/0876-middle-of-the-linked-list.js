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
var middleNode = function(head) {
    if(head === null || head.next === null)
    {
        return head;
    }
    
    let len = 0, temp = head;
    while(temp !== null)
    {
        len++;
        temp = temp.next;
    }
    
    
    let mid = Math.floor(len/2);
    console.log(len, mid)
    
    temp = head;
    while(temp !== null)
    {
        mid--;
        if(mid < 0)
        {
            return temp;
        }
        temp = temp.next;
    }
    return null;
};