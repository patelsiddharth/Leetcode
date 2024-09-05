/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if(original.length !== m * n)
    {
        return [];
    }
    
    let l = 0, r = 0, res = [], temp = [];
    while(r < original.length)
    {
        temp.push(original[r]);
        if((r - l) === n - 1)
        {
            res.push(temp);
            temp = [];
            l = r + 1;
        }
        r = r + 1;
    }
    
    return res;
};