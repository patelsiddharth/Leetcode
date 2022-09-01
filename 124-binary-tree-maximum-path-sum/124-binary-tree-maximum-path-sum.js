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
var maxPathSum = function(root) {
    let max = Number.NEGATIVE_INFINITY;
    
    const getMaxPathOfSubTree = function(root) {
        if(root === null)
            return 0
        
        let lh = getMaxPathOfSubTree(root.left)
        let rh = getMaxPathOfSubTree(root.right)
        
        if(lh < 0)
            lh = 0;
        if(rh < 0)
            rh = 0;
        
        max = Math.max(max, lh + rh + root.val)
        
        return root.val + Math.max(lh, rh);
    }
    
    getMaxPathOfSubTree(root)
    
    return max;
};