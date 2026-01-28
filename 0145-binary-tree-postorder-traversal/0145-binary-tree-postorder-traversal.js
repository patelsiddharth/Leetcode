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
var postorderTraversal = function(root) {
    if (root === null) return [];

    let s1 = [root], s2 = [];
    while(s1.length > 0) {
        const node = s1.pop();
        s2.push(node.val);
        (node.left !== null) && s1.push(node.left);
        (node.right !== null) && s1.push(node.right);
    }
    return s2.reverse();
};