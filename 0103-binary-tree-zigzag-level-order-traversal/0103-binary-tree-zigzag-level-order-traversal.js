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
var zigzagLevelOrder = function(root) {
    if (root === null) return [];

    let queue = [root], res = [], lr = true;
    while(queue.length > 0) {
        let size = queue.length, arr = [];
        for(let i = 0; i < size; i++) {
            const node = queue.shift();
            const index = lr ? i : size - 1 - i;
            arr[index] = node.val;
            (node.left !== null) && queue.push(node.left);
            (node.right !== null) && queue.push(node.right);
        }
        res.push(arr);
        lr = !lr;
    }
    return res;
};