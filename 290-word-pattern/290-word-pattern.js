/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let obj = {}
    
    s = s.split(" ")
    
    if(s.length !== pattern.length)
    {
        return false;
    }
    
    for(let index = 0; index < s.length; index++) {
        if(!obj[pattern[index]])
        {
            if(Object.values(obj).includes(s[index]))
               return false;
            obj[pattern[index]] = s[index];
        }
        else if(obj[pattern[index]] && obj[pattern[index]] !== s[index])
        {
            return false;
        }
    }
    
    return true;
};