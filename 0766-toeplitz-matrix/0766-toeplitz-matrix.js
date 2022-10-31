/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    let row = matrix.length - 1, col = matrix[0].length - 1;
    
    for(let r = 1; r <= row; r++)
    {
        for(let c = 1; c <= col; c++)
        {
            if(matrix[r][c] !== matrix[r-1][c-1])
                return false;
        }
    }
    return true;
};