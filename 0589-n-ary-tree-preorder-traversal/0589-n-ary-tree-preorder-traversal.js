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
    let res = []
    
    const pre = function(node) {
        if(node === null) return null;
        
        res.push(node.val);
        if(node.children !== null)
        {
            node.children.forEach(child => pre(child));
        }
    }
    
    pre(root);
    
    return res;
};