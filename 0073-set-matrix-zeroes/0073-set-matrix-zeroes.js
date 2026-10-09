/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rowArr = new Array(matrix.length).fill(1);
    let colArr = new Array(matrix[0].length).fill(1);
    
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                rowArr[j] = 0;
                colArr[i] = 0;
            }
        }
    }

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if (rowArr[j] === 0 || colArr[i] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
};