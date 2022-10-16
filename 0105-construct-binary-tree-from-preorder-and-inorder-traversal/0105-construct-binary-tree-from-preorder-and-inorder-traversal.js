/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const createTreeNode = function(start, end) {
        if(start > end)
            return null
        
        let node = new TreeNode(preorder.shift())
        
        let idx = inorder.findIndex(x => x === node.val)
        if(idx > -1)
        {
            node.left = createTreeNode(start, idx - 1)
            node.right = createTreeNode(idx + 1, end)
        }
        
        return node;
    }
    
    return createTreeNode(0, inorder.length - 1)
};