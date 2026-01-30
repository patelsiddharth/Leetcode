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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const set = new Set();
    const path = (node, arr) => {
        if (node.left === null && node.right === null) {
            arr.push(node.val);
            set.add(arr.join('->'));
            return;
        }
        (node.left !== null) && path(node.left, [...arr, node.val]);
        (node.right !== null) && path(node.right, [...arr, node.val]);
    }
    path(root, []);
    return [...set];
};