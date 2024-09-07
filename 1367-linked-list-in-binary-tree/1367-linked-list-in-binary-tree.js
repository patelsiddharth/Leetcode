/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function(head, root) {
    function move(node, temp) {
        if(!temp)
        {
            return true;
        }
        
        if(!node || node.val !== temp.val)
        {
            return false;
        }
        
        return move(node.left, temp.next) || move(node.right, temp.next);
    }
    
    
    if(move(root, head))
    {
        return true;
    }
    if(!root)
    {
        return false
    }
    return isSubPath(head, root.left) || isSubPath(head, root.right)
};