/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(root === null)
        return "";
    
    let queue = [root], res = []
    
    while(queue.length > 0)
    {
        let size = queue.length;
        for(let i = 0; i < size; i++)
        {
            let node = queue.shift();
            
            if(node)
            {
                res.push(node.val);
                queue.push(node.left);
                queue.push(node.right);
            }
            else
            {
                res.push("#");
            }
        }
    }
    // console.log(arr)
    return res.toString();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(data === "")
    {
        return null;
    }
    
    let arr = data.split(",");
    
    let root = new TreeNode(arr.shift()), queue = [];
    
    queue.push(root)
    
    while(queue.length > 0)
    {
        let node = queue.shift(), temp = arr.shift();
        
        if(temp === "#")
        {
            node.left = null;
        }
        else
        {
            node.left = new TreeNode(temp);
            queue.push(node.left);    
        }
        
        temp = arr.shift();
        
        if(temp === "#")
        {
            node.right = null;
        }
        else
        {
            node.right = new TreeNode(temp);
            queue.push(node.right);    
        }
    }
    
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */