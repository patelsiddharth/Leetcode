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
    const findLCA = function(node) {
        if(node === null)
            return null;
        
        if(node.val < p.val && node.val < q.val)
        {
            return findLCA(node.right)
        }    
        else if(node.val > p.val && node.val > q.val)
        {
            return findLCA(node.left)
        }
        else
        {
            return node;
        }
    } 
    
    return findLCA(root);
};