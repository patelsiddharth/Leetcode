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
var widthOfBinaryTree = function(root) {
    if (root === null) return 0

    let queue = [[root, 0]], width = 0;
    while (queue.length > 0) {
        let size = queue.length;
        let f = queue[0], l = queue[size - 1];
        width = Math.max(width, l[1] - f[1] + 1);

        for(let i = 0; i < size; i++) {
            const [node, idx] = queue.shift();
            (node.left !== null) && queue.push([node.left, 2*(idx-f[1]) + 1]);
            (node.right !== null) && queue.push([node.right, 2*(idx-f[1]) + 2]);
        }
    }
    return width;
};