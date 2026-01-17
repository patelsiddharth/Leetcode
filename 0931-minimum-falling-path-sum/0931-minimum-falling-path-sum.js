/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    let prev = Array.from({ length: matrix[0].length }).fill(0)
    for(let col = 0; col < matrix[0].length; col++) {
        prev[col] = matrix[0][col];
    }

    for(let i = 1; i < matrix.length; i++) {
        let curr = Array.from({ length : matrix[0].length }).fill(Number.POSITIVE_INFINITY);
        for(let j = 0; j < matrix[0].length; j++) {
            let up = prev[j];
            let left = j > 0 ? prev[j-1] : Number.POSITIVE_INFINITY;
            let right = j < matrix[0].length - 1 ? prev[j+1] : Number.POSITIVE_INFINITY;
            curr[j] = matrix[i][j] + Math.min(up, left, right);
        }
        prev = curr
    }
    
    return Math.min(...prev); 
};