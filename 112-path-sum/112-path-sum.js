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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(root === null)
        return false
    
    let sum = 0;
    
    const find = function(root) {
        if(root === null)
            return false;
        
        sum += root.val;
        
        if(sum === targetSum && root.left === null && root.right === null)
        {
            return true
        }
        
        let ls = false, rs = false;
        if(root.left !== null)
        {
            ls = find(root.left)
        }
        
        if(root.right !== null)
        {
            rs = find(root.right)
        }
        
        sum -= root.val;
        
        return ls || rs;
    }
    
    return find(root)
    
};