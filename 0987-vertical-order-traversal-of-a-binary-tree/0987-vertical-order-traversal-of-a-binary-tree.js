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
var verticalTraversal = function(root) {
    if(root === null)
    {
        return [];
    }
    
    let queue = [{node : root, x : 0, y: 0}], obj = {};
    
    while(queue.length > 0)
    {
        let size = queue.length;
        for(let i = 0; i < size; i++)
        {
            let {node, x, y} = queue.shift();
            if(!obj[x])
            {
                obj[x] = {};
            }
            if(!obj[x][y])
            {
                obj[x][y] = [];
            }
            obj[x][y].push(node.val);
            
            node.left && queue.push({ node : node.left, x : x - 1, y : y + 1})
            node.right && queue.push({ node : node.right, x : x + 1, y : y + 1})
        }
    }
    
    let sortedKeys = Object.keys(obj).sort((a,b) => a - b);
    return sortedKeys.reduce((acc, key) => {
        let temp = []
        for(let y in obj[key]) {
            temp.push(...obj[key][y].sort((a,b) => a - b))
        }
        acc.push(temp)
        return acc; 
    }, []);
};