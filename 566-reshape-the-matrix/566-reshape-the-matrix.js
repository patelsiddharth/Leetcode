/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    if(mat.length * mat[0].length !== r * c)
        return mat;
    
    let arr = [], res = [];
    
    mat.forEach(ele => {
        arr.push(...ele);
    });
    
    for(let i = 0; i < r; i++)
    {
        res[i] = []
        res[i].push(...arr.splice(0,c));
    }
    return res;
};