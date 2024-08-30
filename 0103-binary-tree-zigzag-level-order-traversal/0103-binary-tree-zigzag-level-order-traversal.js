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
var zigzagLevelOrder = function(root) {
    if(root === null)
    {
        return [];
    }
    
    let queue = [root], res = [], lr = true
    while(queue.length > 0)
    {
        let tempLvlArr = [], size = queue.length;
        for(i = 0; i < size; i++)
        {
            let tempNode = queue.shift();
            let index = lr ? i : size - 1 - i;
            
            tempLvlArr[index] = tempNode.val;
            tempNode.left && queue.push(tempNode.left);
            tempNode.right && queue.push(tempNode.right);
        }
        
        lr = !lr;
        res.push(tempLvlArr);
    }
    
    return res;
};