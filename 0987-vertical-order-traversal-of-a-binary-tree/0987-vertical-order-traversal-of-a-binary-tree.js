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

// { 
//     x : { 
//         y : [] 
//     }
// }
var verticalTraversal = function(root) {
    let obj = {}
    function vt(node, x, y) {
        if(node === null)
        {
            return;
        }
        
        if(!obj[x])
        {
            obj[x] = {}
        }
        
        if(!obj[x][y])
        {
            obj[x][y] = []
        }
        
        obj[x][y].push(node.val);
        
        node.left && vt(node.left, x - 1, y + 1);
        node.right && vt(node.right, x + 1, y + 1);
    }
    
    vt(root, 0, 0);
    let sortedKeys = Object.keys(obj).sort((a,b) => a-b);
    return sortedKeys.reduce((acc, curr) => {
        let res = []
        for(let i in obj[curr])
        {
            res.push(...obj[curr][i].sort((a,b) => a-b));
        }
        acc.push(res);
        return acc;
    }, []);
};