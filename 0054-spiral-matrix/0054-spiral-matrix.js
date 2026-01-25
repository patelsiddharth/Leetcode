/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = [], n = matrix.length, m = matrix[0].length;
    let top = 0, left = 0, right = m - 1, bottom = n - 1;
    
    while(top <= bottom && left <= right) {
        // Top
        for(let i = left; i <= right; i++) {
            res.push(matrix[top][i]);
        }
        top++;

        // Right
        for(let i = top; i <= bottom; i++) {
            res.push(matrix[i][right]);
        }
        right--;

        // Bottom
        if (top <= bottom) {
            for(let i = right; i >= left; i--) {
                res.push(matrix[bottom][i]);
            }
            bottom--;
        }

        // Left
        if (left <= right) {
            for(let i = bottom; i >= top; i--) {
                res.push(matrix[i][left]);
            }
            left++;
        }
    }
    return res;
};