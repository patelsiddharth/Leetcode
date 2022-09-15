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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(root === null)
        return [];
    
    let res = [], tempRes = [];
    
    const dfs = function(root) {
        tempRes.push(root.val)
        if(root.left === null && root.right === null)
        {
            res.push(tempRes.join("->"));
            tempRes.pop();
            return;
        }
        
        root.left && dfs(root.left)
        root.right && dfs(root.right)
        tempRes.pop();
    }
    
    dfs(root)
    
    return res;
};