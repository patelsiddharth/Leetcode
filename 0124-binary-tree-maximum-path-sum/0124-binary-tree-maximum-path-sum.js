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
    const calH = (node) => {
        if (node === null) return 0;

        const lh = Math.max(0, calH(node.left));
        const rh = Math.max(0, calH(node.right));

        max = Math.max(max, node.val + lh + rh);

        return node.val + Math.max(lh, rh);
    }
    calH(root);

    return max;
};