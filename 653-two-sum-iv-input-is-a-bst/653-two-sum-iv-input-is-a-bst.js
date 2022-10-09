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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let arr = []
    
    const getInorder = function(node) {
        if(node === null)
            return;
        
        getInorder(node.left);
        arr.push(node.val);
        getInorder(node.right);
    }
    
    getInorder(root);
    
    let l = 0, r = arr.length - 1;
    while(l < r) 
    {
        if(arr[l] + arr[r] > k)
            r--;
        else if(arr[l] + arr[r] < k)
            l++;
        else
            return true;
    }
    
    return false;
};