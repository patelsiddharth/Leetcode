/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length, m = matrix[0].length
    let res = Array(n).fill().map(() => Array(m))
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            res[j][m-1-i] = matrix[i][j];
        }    
    }
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            matrix[i][j] = res[i][j];
        }
    }
};