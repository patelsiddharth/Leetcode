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
    const calHeight = (node) => {
        if (node === null) return 0;

        const left = calHeight(node.left);
        const right = calHeight(node.right);
        return 1 + Math.max(left, right);
    }
    return calHeight(root);
};