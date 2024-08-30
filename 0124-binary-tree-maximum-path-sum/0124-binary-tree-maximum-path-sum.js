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
    let maxPathSum = Number.NEGATIVE_INFINITY;
    function maxPath(node)
    {
        if(node === null)
        {
            return 0;
        }
        
        let lps = Math.max(0, maxPath(node.left))
        let rps = Math.max(0, maxPath(node.right))
        
        maxPathSum = Math.max(maxPathSum, node.val + lps + rps);
        
        return node.val + Math.max(lps, rps);
    }
    
    maxPath(root);
    return maxPathSum;
};