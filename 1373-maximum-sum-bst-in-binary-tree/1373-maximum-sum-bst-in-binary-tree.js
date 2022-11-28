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
var maxSumBST = function(root) {
    let maxSum = 0
    const postOrder = function(node) {
        if(node === null)
        {
            return { sum : 0, min : Number.POSITIVE_INFINITY, max : Number.NEGATIVE_INFINITY }
        }
        
        let leftTree = postOrder(node.left)
        let rightTree = postOrder(node.right)
        
        if(leftTree.max < node.val && node.val < rightTree.min)
        {
            maxSum = Math.max(maxSum, leftTree.sum + rightTree.sum + node.val)
            return { 
                sum : leftTree.sum + rightTree.sum + node.val, 
                min : Math.min(node.val, leftTree.min), 
                max : Math.max(node.val, rightTree.max) 
            } 
        }
        
        return { 
            sum : Math.max(leftTree.sum, rightTree.sum), 
            min : Number.NEGATIVE_INFINITY, 
            max : Number.POSITIVE_INFINITY 
        } 
    }
    
    postOrder(root);
    
    return maxSum;
};