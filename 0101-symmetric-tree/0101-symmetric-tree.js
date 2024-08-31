/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(root === null)
    {
        return true;
    }
    
    function move(node1, node2) {
        if(node1 === null || node2 === null)
        {
            return node1 === node2;
        }
        
        if(node1.val !== node2.val)
        {
            return false;
        }
        
        return move(node1.left, node2.right) && move(node1.right, node2.left);
    }
    
    return move(root.left, root.right);
};