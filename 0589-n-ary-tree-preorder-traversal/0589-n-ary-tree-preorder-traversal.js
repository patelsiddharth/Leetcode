/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    if(root === null) return [];
    
    let res = [], queue = [root];
    
    while(queue.length > 0)
    {
        let temp = queue.pop();
        res.push(temp.val);
        
        if(temp.children !== null)
        {
            for(let i = temp.children.length - 1; i >= 0; i--)
            {
                queue.push(temp.children[i]);
            }
        }
    }
    
    return res;
};