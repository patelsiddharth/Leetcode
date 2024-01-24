/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let coor = []
    for(let i = 0; i < matrix.length; i++)
    {
        for(let j = 0; j < matrix[0].length; j++)
        {
            if(matrix[i][j] === 0)
            {
                coor.push([i,j])
            }
        }   
    }
    
    for(let i = 0; i < coor.length; i++)
    {
        let row = coor[i][0], col = coor[i][1];
        
        for(let idx = 0; idx < matrix[row].length; idx++)
        {
            matrix[row][idx] = 0;
        }
        
        for(let idx = 0; idx < matrix.length; idx++)
        {
            matrix[idx][col] = 0;
        }
    }
};