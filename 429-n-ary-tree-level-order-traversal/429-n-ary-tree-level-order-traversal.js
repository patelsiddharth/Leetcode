/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root === null)
        return [];
    
    let queue = [root], res = []
    
    while(queue.length > 0)
    {
        let size = queue.length, tempRes = [];
        for(let i = 0; i < size; i++)
        {
            let temp = queue.shift();
            
            temp.children.forEach(child => {
                queue.push(child)
            })
            
            tempRes.push(temp.val);
        }
        
        res.push(tempRes)
    }
    
    return res;
};