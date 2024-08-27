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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if(root === null)
    {
        return []
    }
    
    let st1 = [root], st2 = [];
    
    while(st1.length > 0)
    {
        let temp = st1.pop();
        if(temp.left)
        {
            st1.push(temp.left)
        }
        
        if(temp.right)
        {
            st1.push(temp.right)
        }
        
        st2.push(temp);
    }
    
    let res = [];
    for(let i = st2.length - 1; i >= 0; i--)
    {
        res.push(st2[i].val)
    }
    return res;
};