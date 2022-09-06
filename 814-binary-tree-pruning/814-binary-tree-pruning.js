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
 * @return {TreeNode}
 */
var pruneTree = function(root) {
    if(root === null)
        return [];
    
    const prune = function(node) {
        if(node.left !== null)
            node.left = prune(node.left);
        
        if(node.right !== null)
            node.right = prune(node.right);
        
        if(node.val === 0 && node.left === null && node.right === null)
        {
            return null
        }
        
        return node
    }
    
    prune(root);
    
     if(root.val === 0 && root.left === null && root.right === null)
    {
        return null;
    }
    
    return root;
};