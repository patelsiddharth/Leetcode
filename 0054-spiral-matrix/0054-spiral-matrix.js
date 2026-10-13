/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = [], m = matrix.length, n = matrix[0].length;
    let colStart = 0, colEnd = n - 1;
    let rowStart = 0, rowEnd = m - 1;

    while(colStart <= colEnd && rowStart <= rowEnd) {
        // left to right
        for(let col = colStart; col <= colEnd; col++) {
            res.push(matrix[rowStart][col]);
        }
        rowStart++;

        // top to bottom
        for (let row = rowStart; row <= rowEnd; row++) {
            res.push(matrix[row][colEnd]);
        }
        colEnd--;

        // right to left
        if (rowStart <= rowEnd) {
            for(let col = colEnd; col >= colStart; col--) {
                res.push(matrix[rowEnd][col]);
            }
            rowEnd--;
        }

        // bottm to top
        if (colStart <= colEnd) {
            for (let row = rowEnd; row >= rowStart; row--) {
                res.push(matrix[row][colStart])
            }
            colStart++;
        }
    }
    return res;
};