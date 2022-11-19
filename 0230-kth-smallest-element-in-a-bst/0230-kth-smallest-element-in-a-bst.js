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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let res = []
    const findElement = function(node) {
        if(node === null)
            return;
        
        findElement(node.left);
        res.push(node.val);
        findElement(node.right);
    }
    
    findElement(root);
    
    return res[k-1];
};