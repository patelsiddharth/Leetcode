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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let sum = 0;
    
    const inOrder = function(node) {
        if(node === null)
            return;
        
        inOrder(node.left)
        if(node.val >= low && node.val <= high)
        {
            sum += node.val;
        }
        inOrder(node.right)
    }
    inOrder(root);
    
    return sum;
};