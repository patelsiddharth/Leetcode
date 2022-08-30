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

// Left  Right  Node

var postorderTraversal = function(root) {
    if(root === null)
        return []
    
    let temp, res = [], stack1 = [root], stack2 = [];
    
    while(stack1.length !== 0)
    {
        temp = stack1.pop()
        
        if(temp.left)
            stack1.push(temp.left)
        
        if(temp.right)
            stack1.push(temp.right)
        
        stack2.push(temp)
    }
    
    while(stack2.length !== 0)
    {
        res.push(stack2.pop().val)
    }
    
    return res;
};