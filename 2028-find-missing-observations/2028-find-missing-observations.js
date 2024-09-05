/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {
    let msum = rolls.reduce((acc, cur) => acc + cur);
    let nsum = (mean * (n + rolls.length)) - msum;
    
    let res = [];
    
    if(nsum / n > 6 || nsum < n)
    {
        return [];
    }
    
    for(let i = n - 1; i >= 0; i--)
    {
        res[i] = Math.min(6, nsum - i);
        nsum -= res[i];
    }
    return res;
};