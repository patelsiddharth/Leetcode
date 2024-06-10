/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let zero = []
    for(let row = 0; row < matrix.length; row++)
    {
        for(let col = 0; col < matrix[0].length; col++)
        {
            if(matrix[row][col] === 0)
            {
                zero.push([row, col]);
            }
        }   
    }
    
    zero.forEach(([row, col]) => {
        for(let k = 0; k < matrix[row].length; k++)
        {
            matrix[row][k] = 0
        }
        for(let k = 0; k < matrix.length; k++)
        {
            matrix[k][col] = 0
        } 
    })
};