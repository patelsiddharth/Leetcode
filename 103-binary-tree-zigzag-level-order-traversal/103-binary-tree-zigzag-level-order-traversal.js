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
 * @return {number[][]}
 */

// 3 20 9 
var zigzagLevelOrder = function(root) {
    if(root === null)
        return [];
    
    let queue = [], rl = false, res = [];
    queue.push(root)
    while(queue.length > 0)
    {
        let tempRes = [], size = queue.length;
        for(let i = 0; i < size; i++)
        {
            let temp = queue.shift();
            let index = rl ? size - 1 - i : i;
            
            tempRes[index] = temp.val;
            
            temp.left && queue.push(temp.left)
            temp.right && queue.push(temp.right)
        }
        rl = !rl;
        res.push(tempRes);
    }
    
    return res;
};