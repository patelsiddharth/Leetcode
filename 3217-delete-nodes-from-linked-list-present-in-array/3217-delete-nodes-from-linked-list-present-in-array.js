/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    if(head === null)
    {
        return head;
    }
    
    let obj = {}
    for(let num of nums)
    {
        obj[num] = obj[num] ? obj[num] + 1 : 1
    }
    
    while(obj[head.val])
    {
        head = head.next;
    }
    
    let curr = head, prev = null;
    while(curr != null)
    {
        if(obj[curr.val])
        {
            prev.next = curr.next;
        }
        else
        {  
            prev = curr;
        }
        curr = curr.next;
    }
    
    return head;
};