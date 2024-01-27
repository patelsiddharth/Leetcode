/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for(let i = 0; i < matrix.length - 1; i++)
    {
        for(let j = i + 1; j < matrix[0].length; j++)
        {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    
    for(let i = 0; i < matrix.length; i++)
    {
        let left = 0, right = matrix[0].length - 1;
        while(left <= right)
        {
            let temp = matrix[i][left];
            matrix[i][left] = matrix[i][right];
            matrix[i][right] = temp;
            left++;
            right--;
        }
    }
};