/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let left = 0, right = matrix[0].length - 1, top = 0, bottom = matrix.length - 1, res = [];
    while(top <= bottom && left <= right)
    {
        //top
        for(let i = left; i <= right; i++)
        {
            res.push(matrix[top][i]);
        }
        
        // right
        for(let i = top + 1; i <= bottom; i++)
        {
            res.push(matrix[i][right]);
        }
        
        // bottom
        if(top !== bottom)
        {
            for(let i = right - 1; i >= left; i--)
            {
                res.push(matrix[bottom][i]);
            }
        }
        
        // left
        if(left !== right)
        {
           for(let i = bottom - 1; i >= top + 1; i--)
            {
                res.push(matrix[i][left]);
            } 
        }
        
        top++;
        bottom--;
        left++;
        right--;
    }
    
    return res;
};