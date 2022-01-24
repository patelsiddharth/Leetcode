/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    let bs = false;
    for(let i of s)
    {
        if(i == "b" && !bs)
        {
            bs = true;
        }
        if(i == "a" && bs)
        {
            return false;
        }
    }
    return true;
};