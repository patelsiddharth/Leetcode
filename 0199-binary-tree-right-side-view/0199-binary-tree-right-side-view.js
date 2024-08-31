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
    {
        return [];
    }
    
    let queue = [root], res = [];
    while(queue.length)
    {
        let size = queue.length, tempArr = []
        for(let i = 0; i < size; i++)
        {
            let node = queue.shift();
            if(i === size - 1)
            {
                res.push(node.val);
            }
            node.left && tempArr.push(node.left);
            node.right && tempArr.push(node.right);
        }
        
        queue.push(...tempArr);
    }
    return res;
};