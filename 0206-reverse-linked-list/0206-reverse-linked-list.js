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
var reverseList = function(head) {
    let prev = null, temp = head, arr = [];
    while(temp !== null)
    {
        arr.push(temp.val)
        temp = temp.next;
    }
    
    temp = head;
    while(temp !== null)
    {
        let val = arr.pop();
        temp.val = val;
        temp = temp.next;
    }
    
    return head;
};