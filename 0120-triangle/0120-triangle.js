/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let len = triangle.length, frontRow = triangle[len - 1];
    
    for(let i = len - 2; i >= 0; i--)
    {
        for(let j = 0; j <= i; j++)
        {
            frontRow[j] = triangle[i][j] + Math.min(frontRow[j], frontRow[j+1])
        }
    }
    
    return frontRow[0];
};