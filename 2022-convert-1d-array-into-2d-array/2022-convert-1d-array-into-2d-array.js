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
    
    let l = 0, r = 0, res = [];
    while(r < original.length)
    {
        if((r - l) === n - 1)
        {
            let temp = [];
            for(let i = l; i <= r; i++)
            {
                temp.push(original[i])
            }
            res.push(temp)
            l = r + 1;
        }
        r = r + 1;
    }
    
    return res;
};