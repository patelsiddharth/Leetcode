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
var averageOfLevels = function(root) {    
    let queue = [root], res = [];
    while(queue.length)
    {
        let size = queue.length, tempArr = [], sum = 0;
        for(let i = 0; i < size; i++)
        {
            let node = queue.shift();
            sum += node.val;
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        
        res.push(sum / size)
    }
    return res
};