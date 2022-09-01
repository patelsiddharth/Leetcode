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
 * @return {number}
 */
var maxDepth = function(root) {
    if(root === null)
        return 0;
    
    let queue = [root], depth = 0;
    
    while(queue.length > 0)
    {
        let size = queue.length;
        for(let i = 0; i < size; i++)
        {
            let temp = queue.shift();
            
            if(temp.left !== null)
                queue.push(temp.left)
            
            if(temp.right !== null)
                queue.push(temp.right)
        }
        depth++;
    }
    
    return depth;
};