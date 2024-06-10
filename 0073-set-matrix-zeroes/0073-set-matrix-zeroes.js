/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    for(let row = 0; row < matrix.length; row++)
    {
        for(let col = 0; col < matrix[0].length; col++)
        {
            if(matrix[row][col] === 0)
            {
                for(let k = 0; k < matrix[row].length; k++)
                {
                    if(matrix[row][k] !== 0)
                        matrix[row][k] = "del"
                }
                for(let k = 0; k < matrix.length; k++)
                {
                    if(matrix[k][col] !== 0)
                        matrix[k][col] = "del"
                }
            }
        }   
    }
    
    for(let row = 0; row < matrix.length; row++)
    {
        for(let col = 0; col < matrix[0].length; col++)
        {
            if(matrix[row][col] === "del")
            {
                matrix[row][col] = 0;
            }
        }   
    }
};