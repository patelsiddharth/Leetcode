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
    let arr = [], temp = head;
    
    while(temp!= null)
    {
        arr.push(temp.val)
        temp = temp.next
    }
    
    let i = arr.length - 1;
    
    while(head != null && i >= (arr.length / 2))
    {
        if(head.val !== arr[i])
            return false;
        
        head = head.next;
        i--;
    }
    
    return true;
};