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
    let leftH = 0, rightH = 0;
    if(root === null)
        return 0;
    
    if(root.left !== null)
        leftH = maxDepth(root.left)
    
    if(root.right !== null)
        rightH = maxDepth(root.right)
    
    return 1 + Math.max(leftH, rightH)
};