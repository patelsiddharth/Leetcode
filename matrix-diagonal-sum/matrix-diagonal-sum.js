/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let start = 0, end = mat[0].length - 1, sum = 0;
    for(let i = 0; i < mat.length; i++)
    {
        sum += start == end ? mat[i][start] : mat[i][start] + mat[i][end];
        start++;
        end--;     
    }
    return sum;
};