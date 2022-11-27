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
    const inOrder = function(node) {
        if(node === null) return null
        inOrder(node.left)
        arr.push(node.val)
        inOrder(node.right)
    }
    inOrder(root);
    
    let left = 0, right = arr.length - 1;
    while(left < right)
    {
        if(arr[left] + arr[right] < k)
        {
            left++
        }
        else if(arr[left] + arr[right] > k)
        {
            right--;
        }
        else
        {
            return true;
        }
    }
    
    return false;
};