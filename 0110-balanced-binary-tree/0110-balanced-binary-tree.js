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

var isBalanced = function(root) {
    if (root === null) return true;
    
    // return height if subtree is balanced
    // return -1 if subtree is not balanced
    const checkBalancedTree = (node) => {
        if (node === null) return 0;

        const left = checkBalancedTree(node.left);
        if (left === -1) return -1;

        const right = checkBalancedTree(node.right);
        if (right === -1) return -1;

        if(Math.abs(left - right) > 1) return -1;

        return 1 + Math.max(left, right);
    }

    return checkBalancedTree(root) !== -1;
};