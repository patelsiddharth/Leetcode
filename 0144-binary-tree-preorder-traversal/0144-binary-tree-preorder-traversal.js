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
    // N L R
    let queue = [root], res = [];
    while(queue.length > 0)
    {
        let tempNode = queue.pop();
        if(tempNode === null)
            break;
        res.push(tempNode.val);
        tempNode.right && queue.push(tempNode.right);
        tempNode.left && queue.push(tempNode.left);
    }
    
    return res;
};