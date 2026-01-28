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
    if (root === null) return 0;
    let queue = [root], height = 0;
    while(queue.length > 0) {
        height++;
        let size = queue.length;
        while(size > 0) {
            const node = queue.shift();
            (node.left !== null) && queue.push(node.left);
            (node.right !== null) && queue.push(node.right);
            size--;
        }
    }
    return height;
};