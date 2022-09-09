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
    let res = 0
    
    const findDepth = function(root) {
        if(root === null)
            return 0;
        
        let lh = findDepth(root.left)
        let rh = findDepth(root.right)
        
        return 1 + Math.max(lh, rh)
    }
    
    return findDepth(root);
};