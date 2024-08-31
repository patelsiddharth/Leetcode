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
    let front = 0, rear = 0, queue = [], res = [];
    queue[rear++] = root;
    while(front < rear)
    {
        let start = front, end = rear, sum = 0;
        for(let i = start; i < end; i++)
        {
            let node = queue[i];
            sum += node.val;
            node.left && (queue[rear++] = node.left);
            node.right && (queue[rear++] = node.right);
            front++;
        }
        // console.log(sum)
        res.push(sum / (end-start))
    }
    return res
};