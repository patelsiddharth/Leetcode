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
        return 0;
    
    const pathSum = function(node, sum) {
        if(node === null)
            return false;
        
        if(node.left === null && node.right === null)    
        {
            return (sum - node.val === 0);
        }
        
        let ls = pathSum(node.left, sum - node.val);
        let rs = pathSum(node.right, sum - node.val);
        
        return ls || rs;
    }
    
    return pathSum(root, targetSum)
};