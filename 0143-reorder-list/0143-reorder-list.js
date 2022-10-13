/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let arr = [], temp = head;
    while(temp!== null)
    {
        arr.push(temp.val)
        temp = temp.next;
    }
    
    temp = head;
    
    let left = 0, right = arr.length - 1;
    while(left <= right && temp !== null)
    {
        temp.val = arr[left++];
        if(temp.next !== null)
        {
            temp.next.val = arr[right];
            temp = temp.next.next;
        }
        right--;
        
    }
};