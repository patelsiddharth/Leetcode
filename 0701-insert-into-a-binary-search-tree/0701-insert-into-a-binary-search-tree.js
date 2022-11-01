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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(root === null)
    {
        return new TreeNode(val);
    }
    
    let temp = root;
    while(temp !== null)
    {
        if(temp.val > val)
        {
            if(temp.left !== null)
                temp = temp.left
            else
            {
                temp.left = new TreeNode(val);
                break
            }
        }
        else
        {
            if(temp.right !== null)
                temp = temp.right
            else
            {
                temp.right = new TreeNode(val);
                break
            }
        }
    }
    return root;
};