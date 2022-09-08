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
 * @return {string}
 */
var tree2str = function(root) {
    let res = []
    
    const preOrder = function(root) {
        if(root === null)
            return
        
        res.push("(", root.val.toString());
        
        if(root.left === null && root.right !== null)
            res.push("(", ")");
        else
            preOrder(root.left)
        
        preOrder(root.right)
        
        res.push(")");
    }
    
    preOrder(root)
    let temp = res.join("");
    return temp.substring(1, temp.length-1);
};