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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if(root.val === val)
        return root;
    
    if(root.val > val)
        return (root.left !== null) ? searchBST(root.left, val) : null;
    else
        return (root.right !== null) ? searchBST(root.right, val) : null;
};