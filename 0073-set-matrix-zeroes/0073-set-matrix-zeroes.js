/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const n = matrix.length, m = matrix[0].length;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                for(let k = 0; k < m; k++) {
                    if (matrix[i][k] !== 0) { 
                        matrix[i][k] = Number.POSITIVE_INFINITY;
                    }
                }
                for(let k = 0; k < n; k++) {
                    if (matrix[k][j] !== 0) {
                        matrix[k][j] = Number.POSITIVE_INFINITY;
                    }
                }
            }
        }
    }
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if (matrix[i][j] === Number.POSITIVE_INFINITY) {
                matrix[i][j] = 0;
            }
        }
    }
};