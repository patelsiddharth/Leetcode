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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if(root === null) return [];
    
    let res = [], queue = [root];
    while(queue.length > 0)
    {
        let temp = queue.pop();
        res.push(temp.val);
        temp.right && queue.push(temp.right)
        temp.left && queue.push(temp.left)
    }
    return res;
};