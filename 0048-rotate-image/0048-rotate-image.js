/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length;
    let res = Array(n).fill().map(() => Array(n))
    for(let i = 0; i < n - 1; i++) {
        for(let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]]  = [matrix[j][i], matrix[i][j]];
        }    
    }
    
    for(let i = 0; i < n; i++) {
        let l = 0, r = n-1;
        while(l <= r) {
            [matrix[i][l], matrix[i][r]] = [matrix[i][r], matrix[i][l]];
            l++;
            r--;
        }
    }
};