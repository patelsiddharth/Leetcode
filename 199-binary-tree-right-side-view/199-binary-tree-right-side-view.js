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
var rightSideView = function(root) {
    if(root === null)
        return [];

    let res = [], queue = [root];
    while(queue.length)
    {
        let size = queue.length;
        res.push(queue[size-1].val);
        for(let i = 0; i < size; i++)
        {
            let temp = queue.shift();
            temp.left && queue.push(temp.left)
            temp.right && queue.push(temp.right)
        }
    }
    
    return res;
};