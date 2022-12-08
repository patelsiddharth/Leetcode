/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let arr = [], index = 0, next = false, res = true;

    let inOrder = function(node) {
        if(node === null) return;
        if(node.left === null && node.right === null)
        {
            if(next)
            {
                if(arr[index] !== node.val) 
                    res = false;
            }
            else
            {
                arr[index] = node.val
            }
            index++;
            return;
        }
        inOrder(node.left);
        
        inOrder(node.right);
    }
    inOrder(root1);
    index = 0;
    next = true;
    inOrder(root2);
    return res && (arr.length === index);
};