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
 * @return {number}
 */
var maxDepth = function(root) {
    function depth(node) {
        if(node === null)
        {
            return 0;
        }
        
        if(node.left === null && node.right === null)
        {
            return 1;
        }
        
        let ls = 1 + depth(node.left)
        let rs = 1 + depth(node.right)
        return Math.max(ls, rs);
    }
    
    return depth(root)
};