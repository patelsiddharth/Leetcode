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
    const path = (node) => {
        if (!node || node === p || node === q) return node;

        const l = path(node.left);
        const r = path(node.right);
        if (!l && !r) return null;
        else if (l && !r) return l;
        else if (!l && r) return r;
        else return node;
    }
    return path(root);
};