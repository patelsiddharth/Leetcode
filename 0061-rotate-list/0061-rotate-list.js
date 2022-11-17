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
    if(head === null) return head;
    let len = 1, node = head;
    while(node.next !== null)
    {
        node = node.next;
        len++;
    }
    
    k = k % len;
    
    if(len === 1 || k === 0)
        return head;
    
    node.next = head;
    
    let count = len - (k % len);
    
    while(count > 0)
    {
        head = head.next
        node = node.next;
        count--;
    }
    
    node.next = null;
    
    return head;
    
};