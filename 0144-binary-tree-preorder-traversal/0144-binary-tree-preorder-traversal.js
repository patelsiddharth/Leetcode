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
        let temp = stack.pop();
        res.push(temp.val);
        
        if(temp.right !== null)
        {
            stack.push(temp.right);
        }
        
        if(temp.left !== null)
        {
            stack.push(temp.left);
        }
    }
    
    return res;
};