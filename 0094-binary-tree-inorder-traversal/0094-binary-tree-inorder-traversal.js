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
var inorderTraversal = function(root) {
    if (root === null) return [];
    let stack = [], res = [], node = root;
    while(true) {
        if(node !== null) {
            stack.push(node);
            node = node.left;
        } else {
            if (stack.length === 0) {
                break;
            }
            node = stack.pop();
            res.push(node.val);
            node = node.right;
        }
    }
    return res;
};