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
 * @return {boolean}
 */
var isBalanced = function(root) {
    const getHeight = function(node) {
        if(node === null)
            return 0;
        
        let lh = getHeight(node.left)
        let rh = getHeight(node.right)
        
        return 1 + Math.max(lh, rh)
    }
    
    const checkTree = function(node) {
        if(node === null)
            return true;
        
        let lh = getHeight(node.left)
        let rh = getHeight(node.right)
        
        if(Math.abs(lh - rh) > 1)
        {
            return false;
        }
        
        let l = checkTree(node.left)
        let r = checkTree(node.right)
        
        if(!l || !r)
            return false;        
        
        return true;
    }
    
    return checkTree(root);
};