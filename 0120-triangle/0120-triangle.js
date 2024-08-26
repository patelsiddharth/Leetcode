/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let len = triangle.length;
    for(let i = len - 2; i >= 0; i--)
    {
        for(let j = 0; j <= i; j++)
        {
            triangle[len-1][j] = triangle[i][j] + Math.min(triangle[len-1][j], triangle[len-1][j+1])
        }
    }
    return triangle[len-1][0];
};