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
    let res = [], curr = root
    
    while(curr !== null)
    {
        if(curr.left === null)
        {
            res.push(curr.val)
            curr = curr.right;
        }
        else
        {
            let temp = curr.left
            while(temp.right !== null && temp.right !== curr)
            {
                temp = temp.right;
            }
            
            if(temp.right === null)
            {
                temp.right = curr;   
                curr = curr.left;
            }
            else
            {
                temp.right = null;
                res.push(curr.val)
                curr = curr.right
            }
        }
    }
    
    return res;
};