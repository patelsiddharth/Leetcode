/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const constructTree = function(start, end) {
        if(start > end)
            return null;
        
        let root = new TreeNode(postorder.pop());
        let idx = inorder.findIndex(val => val === root.val)
        if(idx > -1)
        {
            root.right = constructTree(idx + 1, end)
            root.left = constructTree(start, idx - 1)
        }
        return root;
    }
    
    return constructTree(0, inorder.length - 1)
};