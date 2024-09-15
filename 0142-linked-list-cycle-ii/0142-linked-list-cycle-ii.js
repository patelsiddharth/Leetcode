/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head, fast = head;
    while(fast !== null && fast.next !== null)
    {
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast)
        {
            let temp = head;
            while(temp !== slow)
            {
                temp = temp.next;
                slow = slow.next;
            }
            return temp;
        }
    }
    
    return null;
};