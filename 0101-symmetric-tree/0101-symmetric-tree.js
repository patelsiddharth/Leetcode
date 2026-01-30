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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (root === null) return true;

    let queue = [{x: 0, node: root}], level = 0;
    while(queue.length > 0) {
        const size  = queue.length;
        
        if(size % 2 !== 0 && level !== 0) return false;
        level++;

        let left = 0, right = queue.length - 1;
        while(left < right) {
            if (
                queue[left].node.val !== queue[right].node.val ||
                Math.abs(queue[right].x + queue[left].x) !== 0
            ) {
                return false;
            }
            left++;
            right--;
        }
        for(let i = 0; i < size; i++) {
            const {x, node} = queue.shift();
            if (node.left) {
                queue.push({x: x-1, node: node.left});
            } 
            if (node.right) {
                queue.push({x: x+1, node: node.right});
            }
        }
    }
    return true;
};