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
var findBottomLeftValue = function(root) {
    let queue = [root], res = [];
    while(queue.length)
    {
        let size = queue.length;
        for(let i = 0; i < size; i++)
        {
            let node = queue.shift();
            if(i === 0)
            {
                res.push(node.val);
            }
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
    return res[res.length - 1]
};