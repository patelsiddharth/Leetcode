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
var isSymmetric = function(root) {
    if(root === null)
    {
        return true;
    }
    
    function move(node1, node2) {
        if(node1 === null || node2 === null)
        {
            return node1 === node2;
        }
        
        if((node1 !== null && node2 === null) || (node1 === null && node2 == null) || (node1 && node2 && node1.val !== node2.val))
        {
            return false;
        }
            
        let isLeftSym = false, isRightSym = false;
        if(node1.left && node2.right)
        {
            isLeftSym = move(node1.left, node2.right);
        }
        else if(node1.left === null && node2.right === null)
        {
            isLeftSym = true;
        }
        
        if(node1.right && node2.left)
        {
           isRightSym = move(node1.right, node2.left);
        } 
        else if(node1.right === null && node2.left === null)
        {
            isRightSym = true;
        }
        
        return isLeftSym && isRightSym;
    }
    
    return move(root.left, root.right);
};