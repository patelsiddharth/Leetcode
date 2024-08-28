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
    {
        return 0
    }
    
    let queue = [[root]], depth = 1;
    while(queue.length > 0)
    {
        let temp = queue.shift();
        console.log(temp)
        let tempArr = []
        while(temp.length > 0)
        {
            let tempNode = temp.shift();
            tempNode.left && tempArr.push(tempNode.left);
            tempNode.right && tempArr.push(tempNode.right);
        }
        
        if(tempArr.length > 0)
        {
            queue.push(tempArr)
            depth++;
        }
    }
    return depth;
};