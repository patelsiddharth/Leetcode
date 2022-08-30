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

var preorderTraversal = function(root) {
    if(root === null)
        return [];
    
    let res = [], stack = [root];
    
    while(stack.length > 0)
    {
        let x = stack.pop();
        res.push(x.val)
        if(x.right !== null)
            stack.push(x.right)
        
        if(x.left !== null)
            stack.push(x.left)
    }
    
    return res;
};