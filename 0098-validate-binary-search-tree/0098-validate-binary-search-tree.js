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
var isValidBST = function(root) {
    const checkTree = function(node, min, max) {
        if(node === null) return true;
        if(node.val >= max || node.val <= min) return false;
        return checkTree(node.left, min, node.val) && checkTree(node.right, node.val, max);
    }
    return checkTree(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};