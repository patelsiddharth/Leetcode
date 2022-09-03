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

//     1
//   2   3
// 4
var rightSideView = function(root) {
    if(root === null)
        return [];
    
    let queue = [root], res = [];
    
    while(queue.length > 0)
    {
        let size = queue.length, temp = queue[size - 1];
        
        res.push(temp.val)
        
        for(let i = size - 1; i >= 0; i--)
        {
            let t = queue.shift();
            t.left && queue.push(t.left);
            t.right && queue.push(t.right)
        }
    }
    
    return res;
};