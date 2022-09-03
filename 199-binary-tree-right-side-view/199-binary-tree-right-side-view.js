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
        return []
    
    let queue = [root], res = [];
    
    while(queue.length > 0)
    {
        let size = queue.length, temp = queue[size - 1];
        
        res.push(temp.val)
        
        for(let i = 0; i < size; i++)
        {
            let t = queue.pop();
            t.right && queue.unshift(t.right)
            t.left && queue.unshift(t.left);
        }
    }
    
    return res;
};