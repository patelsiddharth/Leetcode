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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(root === null)
        return;
    
    let arr = [root]
    while(arr.length > 0)
    {
        let node = arr.pop();
        
        if(node.right !== null)
        {
            arr.push(node.right)
        }
        
        if(node.left !== null)
        {
            arr.push(node.left)
        }
        
        if(arr.length > 0)
        {
            node.right = arr[arr.length - 1];
        }
        
        node.left = null;   
    }
};