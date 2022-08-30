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
var levelOrder = function(root) {
    let res = []
    let q = [root];
    
    if(root === null)
        return [];

    while(q.length > 0)
    {
        let t = [], size = q.length;

        for(let i = 0;  i < size; i++)
        {
            let x = q.shift();
            t.push(x.val);
            
            if(x.left !== null)
                q.push(x.left)

            if(x.right !== null)
                q.push(x.right)
        }
        res.push(t)
    }

    return res;
};