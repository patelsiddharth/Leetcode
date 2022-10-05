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
 * @return {number}
 */
var countNodes = function(root) {
    
    const getCount = function(node) {
        if(node === null)
            return 0;
        
        let temp = node, lh = 0, rh = 0;
        while(temp)
        {
            lh++;
            temp = temp.left;
        }
        
        temp = node;
        while(temp)
        {
            rh++;
            temp = temp.right;
        }
        
        if(lh === rh)
        {
            return Math.pow(2, lh) - 1
        }
            
        
        return 1 + getCount(node.left) + getCount(node.right);
    }
    
    return getCount(root);
};