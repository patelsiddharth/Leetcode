/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let len = 0, temp = head, prev = null;
    while(temp.next !== null)
    {
        len++;
        temp.prev = prev;
        prev = temp;
        temp = temp.next;
    }
    temp.prev = prev;
    len++;
    
    let count = 0, temp1 = head;
    
    while(count < Math.ceil(len / 2))
    {
        count++;
        if(temp1.val !== temp.val)
        {
            return false
        }
        temp1 = temp1.next;
        temp = temp.prev;
    }
    
    return true;
};