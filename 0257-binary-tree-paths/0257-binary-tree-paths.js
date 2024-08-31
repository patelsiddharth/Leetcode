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
    let res = []
    function move(node, path) {
        if(node === null)
        {
            return;
        }
        
        if(node.left === null && node.right === null)
        {
            path.push(node.val)
            res.push(path.join('->'));
            path.pop();
            return;
        }
        
        path.push(node.val)
        move(node.left, path);
        move(node.right, path);
        path.pop()
    }
    
    move(root, []);
    return res;
};