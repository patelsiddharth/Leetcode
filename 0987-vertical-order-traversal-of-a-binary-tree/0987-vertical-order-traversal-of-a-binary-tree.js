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
        return null;
    let queue = [{node : root, x : 0, y: 0}], obj = {}
    while(queue.length !== 0)
    {
        let size = queue.length;
        for(let i = 0; i < size; i++)
        {
            let item = queue.shift()
            if(!obj[item.x])
            {
                obj[item.x] = {};
                obj[item.x][item.y] = [item.node.val];
            }
            else
            {
                if(obj[item.x][item.y])
                {
                    obj[item.x][item.y].push(item.node.val)
                }
                else
                {
                    obj[item.x][item.y] = [item.node.val]
                }
            }
            
            item.node.left && queue.push({ node : item.node.left, x : item.x - 1, y : item.y + 1})
            item.node.right && queue.push({ node : item.node.right, x : item.x + 1, y : item.y + 1})
        }
    }
    
    let sortedKeys = Object.keys(obj).sort((a,b) => +a - +b)
    return sortedKeys.reduce((acc, key) => {
        let temp = []
        for(y in obj[key]) {
            temp.push(...obj[key][y].sort((a,b) => a - b))
        }
        acc.push(temp)
        return acc; 
    }, []);
};