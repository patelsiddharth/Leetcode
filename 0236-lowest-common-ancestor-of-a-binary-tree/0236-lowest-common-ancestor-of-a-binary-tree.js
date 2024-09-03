/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    function dfs(node) {
        if(node === p || node === q || node === null)
        {
            return node;
        }
        
        let left = null;
        node.left && (left = dfs(node.left));
        
        let right = null;
        node.right && (right = dfs(node.right));
        
        if(left && right)
        {
            return node;
        }
        else if(left || right)
        {
            return left || right;
        }
        
        return null;
    }
    
    return dfs(root);
};