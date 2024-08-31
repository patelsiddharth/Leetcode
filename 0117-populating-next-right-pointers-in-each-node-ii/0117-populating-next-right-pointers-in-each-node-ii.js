/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if(root === null)
        return null
    
    let queue = [root];
    while(queue.length)
    {
        let size = queue.length, tempArr = [];
        for(let i = 0; i < size; i++)
        {
            let node = queue.shift();
            if(queue.length === 0)
            {
                node.next = null;
            }
            else
            {
                node.next = queue[0];
            }
            
            node.left && tempArr.push(node.left);
            node.right && tempArr.push(node.right);
        }
        queue.push(...tempArr);
    }
    
    return root;
};