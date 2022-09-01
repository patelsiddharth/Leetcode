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
var isBalanced = function(root) {
    const getHeight = function(root) {
        if(root === null)
            return 0;
        
        let lh = getHeight(root.left)
        
        let rh = getHeight(root.right)
        
        if(lh === -1 || rh === -1 || Math.abs(lh-rh) > 1)
            return -1;
        
        return 1 + Math.max(lh, rh)
    }
    
    return getHeight(root) !== -1
};