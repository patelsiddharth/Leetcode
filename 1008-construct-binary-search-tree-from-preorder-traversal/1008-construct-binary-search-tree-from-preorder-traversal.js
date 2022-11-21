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
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    if(preorder.length === 0)
        return null;
    
    let root = new TreeNode(preorder[0]);
    
    const makeTree = function(index) {
        if(index >= preorder.length)
            return;
        
        let node = root;
        while(true)
        {   
            if(node.val > preorder[index])
            {
                if(node.left !== null)
                    node = node.left;
                else
                {
                    node.left = new TreeNode(preorder[index]);;
                    break;
                }
            }
            else
            {
                if(node.right !== null)
                    node = node.right;
                else
                {
                    node.right = new TreeNode(preorder[index]);;
                    break;
                }
                    
            }
        }
        makeTree(index + 1);
    }
    
    makeTree(1)
    
    return root;
};