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
    let max = 0;
    
    const findHeight = function(root) {
        if(root === null)
            return 0
        
        let lh = findHeight(root.left)
        let rh = findHeight(root.right)
        
        max = Math.max(max, lh + rh)
        
        return 1 + Math.max(lh, rh)
    }
    
    findHeight(root)
    
    return max;
};