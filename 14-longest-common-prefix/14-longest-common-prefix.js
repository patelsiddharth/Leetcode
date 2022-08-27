/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let res = "";
    for(let idx in strs[0].split(""))
    {
        for(let i = 1; i < strs.length; i++)
        {
            if(idx >= strs[i].length || strs[i][idx] !== strs[0][idx])
                return res;
        }
        res += strs[0][idx];
    }
    
    return res;
};