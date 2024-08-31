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
var rightSideView = function(root) {
    let res = []
    
    function move(node, level) {
        if(node === null)
        {
            return;
        }
        if(res.length === level)
        {
            res.push(node.val)
        }
        
        move(node.right, level + 1);
        move(node.left, level + 1);
    }
    move(root, 0)
    return res;
};