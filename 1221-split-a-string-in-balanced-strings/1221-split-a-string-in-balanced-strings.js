/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 0, cr = 0, cl = 0;
    for(let i = 0; i < s.length; i++)
    {
        if(s[i] === "R")
        {
            cr++;
        }
        else if(s[i] === "L")
        {
            cl++
        }
        
        if(cr === cl)
        {
            count++;
        }
    }
    
    return count;
};
