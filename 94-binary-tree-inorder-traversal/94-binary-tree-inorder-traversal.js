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
var inorderTraversal = function(root) {
    if(root === null)
        return []
    
    let temp = root, res = [], stack = [];
    
    while(1)
    {
        if(temp !== null)
        {
            stack.push(temp)
            temp = temp.left;
        }
        else
        {
            if(stack.length === 0)
               break;
            
            temp = stack.pop()
            
            res.push(temp.val)
            
            temp = temp.right
        }
    }
    
    return res;
};