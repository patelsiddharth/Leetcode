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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if (root === null) return [];
    const stack = [root], res = [];
    while(stack.length > 0) {
        const node = stack.pop();
        res.push(node.val);
        (node.right !== null) && stack.push(node.right);
        (node.left !== null) && stack.push(node.left);
    }
    return res;
};