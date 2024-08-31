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
var findBottomLeftValue = function(root) {
    let res = [];
    function move(node, depth) {
        if(node === null)
        {
            return;
        }
        
        if(depth === res.length)
        {
            res.push(node.val);
        }
        
        node.left && move(node.left, depth + 1);
        node.right && move(node.right, depth + 1);
    }
    move(root, 0)
    return res[res.length - 1]
};