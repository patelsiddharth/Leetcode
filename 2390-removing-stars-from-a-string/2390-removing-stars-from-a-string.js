/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let res = ""
    for(char of s)
    {
        if(char === '*')
        {
            res = res.slice(0, -1)
        }
        else
        {
            res += char;
        }
    }
    
    return res;
};