/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length;
    let newMat = Array(n).fill().map(() => Array(n));

    for(let row = 0; row < n; row++) {
        for(let col = 0; col < n; col++) {
            newMat[col][n - 1 - row] = matrix[row][col];
        }
    }
    for(let row = 0; row < n; row++) {
        for(let col = 0; col < n; col++) {
            matrix[row][col] = newMat[row][col]
        }
    }
};