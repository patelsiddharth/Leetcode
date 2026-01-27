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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) return [];

    const queue = [root], res = [];
    while(queue.length > 0) {
        let len = queue.length, arr = [];
        while(len > 0) {
            const node = queue.shift();
            arr.push(node.val);
            (node.left !== null) && queue.push(node.left);
            (node.right !== null) && queue.push(node.right);
            len--;
        }
        res.push(arr);
    }

    return res;
};