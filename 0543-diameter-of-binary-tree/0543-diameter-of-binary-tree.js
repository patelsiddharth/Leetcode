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
var diameterOfBinaryTree = function(root) {
    let max = 0
    function dia(node) 
    {
        if(node === null)
        {
            return 0;
        }
        
        let lh = dia(node.left);
        let rh = dia(node.right)
        max = Math.max(max, lh + rh);
        return 1 + Math.max(lh, rh)
    }
    dia(root);
    return max;
};