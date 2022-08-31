/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let row = matrix.length - 1, col = matrix[0].length - 1, visitedMap = new Map();
    
    for(let i = 0; i <= row; i++)
    {
        for(let j = 0; j <= col; j++)
        {
            if(matrix[i][j] === 0 && !visitedMap[[i,j]])
            {
                for(let k = 0; k < matrix[i].length; k++)
                {
                    if(matrix[i][k] !== 0)
                    {
                        matrix[i][k] = 0;
                        visitedMap[[i,k]] = 1;
                    }
                }
                for(let k = 0; k <= row; k++)
                {
                    if(matrix[k][j] !== 0)
                    {
                        matrix[k][j] = 0;
                        visitedMap[[k,j]] = 1;
                    }
                }
            }
            
            visitedMap[[i,j]] = 1;
        }
    }
};